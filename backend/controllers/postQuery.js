import { Post } from '../models/postModel.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getRelatedPost = catchAsync(async (req, res, next) => {
  const { id: postId } = req.params;

  // check if post exist
  const post = await Post.findById(postId);
  if (!post) {
    return next(new AppError('Post not found', 404));
  }

  //query for related post
  const relatedPosts = await Post.find({
    tags: { $in: post.tags },
    _id: { $ne: postId }, //exclude current post
  });

  // send response
  res.status(200).json({
    status: 'success',
    data: {
      relatedPosts,
    },
  });
});

// search filter handler
export const searchAndFilterPosts = catchAsync(async (req, res) => {
  const {
    searchTerm,
    category,
    tags,
    startDate,
    endDate,
    featured,
    page = 1,
    limit = 10,
  } = req.query;

  let query = {};

  // Full-text search
  if (searchTerm) {
    query.$text = { $search: searchTerm };
  }

  // Category filter
  if (category) {
    query.category = category;
  }

  // Tags filter (assuming tags are sent as comma-separated string)
  if (tags) {
    query.tags = { $in: tags.split(',') };
  }

  // Date range filter
  if (startDate || endDate) {
    query.date = {};
    if (startDate) query.date.$gte = new Date(startDate);
    if (endDate) query.date.$lte = new Date(endDate);
  }

  // Featured filter
  if (featured !== undefined) {
    query.featured = featured === 'true';
  }

  // Pagination
  const skip = (page - 1) * limit;

  const posts = await Post.find(query)
    .sort({ date: -1 }) // Sort by date, newest first
    .skip(skip)
    .limit(Number(limit))
    .populate('author', 'name'); // Populate author name

  const total = await Post.countDocuments(query);

  res.json({
    posts,
    currentPage: Number(page),
    totalPages: Math.ceil(total / limit),
    total,
  });
});
