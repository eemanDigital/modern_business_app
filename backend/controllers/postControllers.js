import streamifier from 'streamifier';
import { Post } from '../models/postModel.js';
import multer from 'multer';
import cloudinary from '../utils/cloudinaryConfig.js';
import { catchAsync } from '../utils/catchAsync.js';

// configure multer
const storage = multer.memoryStorage(); // store image in memory
export const upload = multer({ storage: storage });

// create post controller
export const createPosts = catchAsync(async (req, res, next) => {
  const { title, body, author } = req.body;

  // const filename = req.file ? req.file.filename : null; // Handle optional file

  const post = await Post.create({
    title,
    body,
    author,
  });

  res.status(201).json({
    message: 'success',
    data: {
      post,
    },
  });
});

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

// Update post API endpoint
export const updatePost = catchAsync(async (req, res, next) => {
  // Extract post ID and updated data from request body
  const postId = req.params.id;
  const { title, body, author } = req.body;

  // Prepare updated post data
  let updateData = { title, body, author };

  // Update post in the database
  const updatedPost = await Post.findByIdAndUpdate(postId, updateData, {
    new: true,
    runValidators: true,
  });

  // return error if no post found
  if (!updatedPost) {
    return next(new Error('No post found with that ID'));
  }

  // Send a successful response with the updated post
  res.status(200).json({
    status: 'success',
    message: 'Post successfully updated',
    data: {
      post: updatedPost,
    },
  });
});

// delete post controller
export const deletePost = catchAsync(async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId);

  if (!post) return next(res.status(404).json({ message: 'Not found' }));

  res.status(204).json({
    status: 'Post successfully deleted',
  });
});

// Update post image API endpoint

export const updatePostImg = catchAsync(async (req, res, next) => {
  const postId = req.params.id;

  if (!req.file) {
    return next(new Error('No file uploaded'));
  }

  // Use Cloudinary's upload_stream method instead of upload
  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream(
        {
          folder: 'blog_post_img',
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  const result = await streamUpload(req);

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { photo: result.secure_url },
    { new: true, runValidators: true }
  );

  if (!updatedPost) {
    return next(new Error('No post found with that ID'));
  }

  res.status(200).json({
    status: 'success',
    message: 'Post image successfully updated',
    data: {
      post: updatedPost,
    },
  });
});
