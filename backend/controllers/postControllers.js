import { Post } from '../models/postModel.js';
import path from 'path';
import multer from 'multer';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

//image upload
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    );

    // console.log(req.file);
  },
});
// check if the file is an image
// const multerFilter = (req, file, cb) => {

// }
const upload = multer({
  storage: multerStorage,
});

//photo:name of the field
export const uploadPostPhoto = upload.single('file');

export const createPosts = catchAsync(async (req, res, next) => {
  const { title, body, author } = req.body;

  const filename = req.file ? req.file.filename : null; // Handle optional file

  const post = await Post.create({
    title,
    body,
    author,
    photo: filename,
  });

  res.status(201).json({
    message: 'success',
    data: {
      post,
    },
  });
});

// export const getPosts = catchAsync(async (req, res, next) => {
//   const posts = await Post.find().sort({ date: 'desc' });

//   // pagination
//   const page = parseInt(req.query.page);
//   const limit = parseInt(req.query.limit);

//   const startIndex = (page - 1) * limit;
//   const lastIndex = page * limit;
//   const results = {};

//   //all post
//   results.totalPosts = posts.length;
//   //number of pages
//   results.pageCount = Math.ceil(posts.length / limit);
//   // console;

//   // getting next page
//   if (lastIndex < posts.length) {
//     results.next = { page: page + 1, limit: limit };
//   }

//   if (startIndex > 0) {
//     results.prev = {
//       page: page - 1,
//       limit: limit,
//     };
//   }

//   results.result = posts.slice(startIndex, lastIndex);

//   res.status(200).json({
//     message: 'success',
//     // length: posts.length,
//     data: {
//       results,
//     },
//   });
// });

export const getPosts = catchAsync(async (req, res, next) => {
  // Fetch all posts from the database, sorted by date in descending order
  const posts = await Post.find().sort({ date: 'desc' });

  // Extract pagination parameters from query string, ensuring valid numbers
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 5; // Default to 5 posts per page

  // Calculate pagination indices for slicing the posts array
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  // Prepare a results object to hold pagination data and posts
  const results = {
    totalPosts: posts.length, // Total number of posts
    pageCount: Math.ceil(posts.length / limit), // Total number of pages
    next: lastIndex < posts.length ? { page: page + 1, limit } : null, // Link to next page (if any)
    prev: startIndex > 0 ? { page: page - 1, limit } : null, // Link to previous page (if any)
    result: posts.slice(startIndex, lastIndex), // Sliced posts for the current page
  };

  // Send a successful response with pagination data and posts
  res.status(200).json({
    message: 'success',
    data: { results },
  });
});

export const getPost = catchAsync(async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  // console.log(post);
  res.status(200).json({
    message: 'success',
    data: {
      post,
    },
  });
});

export const updatePost = catchAsync(async (req, res, next) => {
  const postId = req.params.id;
  const { title, body, author } = req.body;
  // const { filename } = req.file;
  // const filename = req.file ? req.file.filename : null; // Handle optional file

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    // { title, body, author, photo: filename },
    { title, body, author },
    { new: true }
  );
  console.log(updatedPost);
  res.status(200).json({
    message: 'Post successfully updated',
    data: {
      updatedPost,
    },
  });
});

export const deletePost = catchAsync(async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId);

  if (!post) return next(res.status(404).json({ message: 'Not found' }));

  res.status(204).json({
    status: 'Post successfully deleted',
  });
});

export const updatePostImg = catchAsync(async (req, res, next) => {
  const postId = req.params.id;

  const filename = req.file ? req.file.filename : null;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { photo: filename },
    { new: true }
  );
  console.log(photo, 'PHOTO');
  res.status(200).json({
    message: 'Post successfully updated',
    data: {
      updatedPost,
    },
  });
});
