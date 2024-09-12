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
import { protect } from '../controllers/authController.js';

const postRouter = express.Router();

// postRouter.use(restrictTo('admin', 'user'));
//posts route
postRouter
  .route('/')
  .post(protect, uploadPostPhoto, createPosts)
  // .get(restrictTo('admin'), getPosts);
  .get(getPosts);
postRouter
  .route('/:id')
  .get(getPost)
  .put(protect, updatePost)
  .put(protect, uploadPostPhoto, updatePostImg)
  .delete(protect, deletePost);

export default postRouter;
