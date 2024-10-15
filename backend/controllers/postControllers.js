import streamifier from 'streamifier';
import { Post } from '../models/postModel.js';
import multer from 'multer';
import cloudinary from '../utils/cloudinaryConfig.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import User from '../models/userModel.js';

// configure multer
const storage = multer.memoryStorage(); // store image in memory
export const upload = multer({ storage: storage });

// create post controller
export const createPosts = catchAsync(async (req, res, next) => {
  const { title, body, featured, slug, category, tags } = req.body;

  // const filename = req.file ? req.file.filename : null; // Handle optional file

  const post = await Post.create({
    title,
    body,
    author: req.user.id,
    featured,
    slug,
    category,
    tags,
  });

  res.status(201).json({
    message: 'success',
    data: {
      post,
    },
  });
});

// Get all posts API endpoint
export const getPosts = catchAsync(async (req, res, next) => {
  // Fetch all posts from the database, sorted by date in descending order
  const posts = await Post.find().sort('-date');

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

// Get post API endpoint
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
  // const { title, body, author } = req.body;

  // Prepare updated post data
  // let updateData = { title, body, author };

  // Update post in the database
  const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
    new: true,
    runValidators: true,
  });

  // return error if no post found
  if (!updatedPost) {
    return next(new AppError('No post found with that ID'));
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
    return next(new AppError('No file uploaded'));
  }

  // Use Cloudinary's upload_stream method instead of upload
  const streamUpload = (req) => {
    // Return a promise that resolves with the result of uploading the image
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

      // Pipe the file buffer to the upload stream
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  // Call the streamUpload function and await the result
  const result = await streamUpload(req);

  // Update the post with the image URL
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { photo: result.secure_url },
    { new: true, runValidators: true }
  );

  // Return an error if no post found
  if (!updatedPost) {
    return next(new AppError('No post found with that ID'));
  }

  // Send a successful response with the updated post
  res.status(200).json({
    status: 'success',
    message: 'Post image successfully updated',
    data: {
      post: updatedPost,
    },
  });
});

//create comment handler
export const addCommentToPost = catchAsync(async (req, res, next) => {
  const { id: postId } = req.params;
  const { commentBody } = req.body;
  const userId = req.user.id;

  // Validate input
  if (!commentBody || commentBody.trim() === '') {
    return next(new AppError('Comment body is required', 400));
  }

  // Find the post
  const post = await Post.findById(postId);
  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  // Find the user
  const user = await User.findById(userId);
  if (!user) {
    return next(new AppError('User not found', 404));
  }

  // Create new comment
  const newComment = {
    commentBody: commentBody.trim(),
    author: userId,
    date: Date.now(),
  };

  // Add comment to post
  post.comments.push(newComment);

  // Save the updated post

  await post.save({ validateBeforeSave: false });

  // Send response
  res.status(201).json({
    status: 'success',
    data: {
      comment: newComment,
    },
  });
});
