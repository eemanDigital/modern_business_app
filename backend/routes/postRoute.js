import express from 'express';
import {
  getPosts,
  createPosts,
  getPost,
  updatePost,
  deletePost,
  uploadPostPhoto,
  updatePostImg,
} from '../controllers/postControllers.js';
import { protect, restrictTo } from '../controllers/authController.js';

const postRouter = express.Router();

postRouter

  .route('/')
  .post(protect, restrictTo('admin'), uploadPostPhoto, createPosts)
  // .get(restrictTo('admin'), getPosts);
  .get(getPosts);

postRouter.route('/:id/upload').patch(protect, uploadPostPhoto, updatePostImg);

postRouter
  .route('/:id')
  .get(getPost)
  .put(protect, restrictTo('admin'), updatePost)
  .delete(protect, restrictTo('admin'), deletePost);

export default postRouter;
