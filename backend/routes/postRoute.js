import express from 'express';
import {
  getPosts,
  createPosts,
  getPost,
  updatePost,
  deletePost,
  updatePostImg,
  upload,
} from '../controllers/postControllers.js';
import { protect, restrictTo } from '../controllers/authController.js';

const postRouter = express.Router();

postRouter

  .route('/')
  .post(protect, restrictTo('admin'), createPosts)
  // .get(restrictTo('admin'), getPosts);
  .get(getPosts);

postRouter
  .route('/:id/upload')
  .patch(protect, upload.single('photo'), updatePostImg);

postRouter
  .route('/:id')
  .get(getPost)
  .put(protect, restrictTo('admin'), updatePost)
  .delete(protect, restrictTo('admin'), deletePost);

export default postRouter;
