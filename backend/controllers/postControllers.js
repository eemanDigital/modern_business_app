import { Post } from '../models/postModel.js';

export const createPosts = async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      post,
    },
  });
};

export const getPosts = async (req, res, next) => {
  const posts = await Post.find().sort({ date: 'desc' });

  res.status(200).json({
    status: 'success',
    data: {
      posts,
    },
  });
};

export const getPost = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  // console.log(post);
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
};

export const updatePost = async (req, res, next) => {
  const postId = req.params.id;
  const { title, body } = req.body;
  const updatedPost = await Post.findByIdAndUpdate(postId, { title, body });
  console.log(post);
  res.status(200).json({
    status: 'Post successfully updated',
    data: {
      updatedPost,
    },
  });
};

export const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId);

  if (!post) return next(res.status(404).json({ message: 'Not found' }));

  res.status(204).json({
    status: 'Post successfully deleted',
  });
};
