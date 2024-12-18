import { Post } from '../models/postModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import User from '../models/userModel.js';
import cloudinary from '../utils/cloudinaryConfig.js';

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
    return next(new AppError('No post found with that ID', 404));
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

// Add comment to post handler
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

  // Re-fetch the post with populated comment authors
  const updatedPost = await Post.findById(postId);

  // Send response with the newly added comment (with populated author)
  const addedComment = updatedPost.comments[updatedPost.comments.length - 1];

  res.status(201).json({
    status: 'success',
    data: {
      comment: addedComment,
    },
  });
});

// delete comment handler
export const deleteCommentFromPost = catchAsync(async (req, res, next) => {
  const { postId, commentId } = req.params;
  const userId = req.user.id;

  // Find the post
  const post = await Post.findById(postId);

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  // Find the comment
  const comment = post.comments.id(commentId);

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  // Check if the user is the author of the comment or an admin
  if (comment.author.toString() !== userId && req.user.role !== 'admin') {
    return next(
      new AppError('You do not have permission to delete this comment', 403)
    );
  }

  // Remove the comment
  comment.remove();

  // Save the updated post
  await post.save({ validateBeforeSave: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// Add a reply to a comment
export const addReplyToComment = catchAsync(async (req, res, next) => {
  const { postId, commentId } = req.params;
  const { commentBody } = req.body;
  const userId = req.user.id;

  // Validate input
  if (!commentBody || commentBody.trim() === '') {
    return next(new AppError('Reply body is required', 400));
  }

  // Find the post
  const post = await Post.findById(postId);

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  // Find the comment
  const comment = post.comments.id(commentId);

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  // Create new reply
  const newReply = {
    commentBody: commentBody.trim(),
    author: userId,
    date: Date.now(),
  };

  // Add reply to comment
  comment.replies.push(newReply);

  // Save the updated post
  await post.save({ validateBeforeSave: false });

  res.status(201).json({
    status: 'success',
    data: {
      reply: newReply,
    },
  });
});

// Delete reply handler
export const deleteReplyFromComment = catchAsync(async (req, res, next) => {
  const { postId, commentId, replyId } = req.params;
  const userId = req.user.id;

  // Find the post
  const post = await Post.findById(postId);

  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  // Find the comment
  const comment = post.comments.id(commentId);

  if (!comment) {
    return next(new AppError('Comment not found', 404));
  }

  // Find the reply
  const replyIndex = comment.replies.findIndex((reply) => reply.id === replyId);

  if (replyIndex === -1) {
    return next(new AppError('Reply not found', 404));
  }

  // Check if the user is the author of the reply or an admin
  if (
    comment.replies[replyIndex].author.toString() !== userId &&
    req.user.role !== 'admin'
  ) {
    return next(
      new AppError('You do not have permission to delete this reply', 403)
    );
  }

  // Remove the reply
  comment.replies.splice(replyIndex, 1);

  // Save the updated post
  await post.save({ validateBeforeSave: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// Handler to delete an image from Cloudinary
export const deleteImage = catchAsync(async (req, res, next) => {
  const { public_id } = req.body;

  console.log(public_id);

  // Validate input
  if (!public_id) {
    return next(new AppError('Public ID is required to delete an image', 400));
  }

  // Delete image from Cloudinary
  cloudinary.uploader.destroy(public_id, (error, result) => {
    if (error) {
      return next(new AppError('Failed to delete image from Cloudinary', 500));
    }

    res.status(200).json({
      status: 'success',
      message: 'Image deleted successfully',
      result,
    });
  });
});
