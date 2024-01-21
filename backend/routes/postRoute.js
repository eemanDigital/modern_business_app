import express from 'express';
import {
  getPosts,
  createPosts,
  getPost,
  updatePost,
  deletePost,
  uploadPostPhoto,
} from '../controllers/postControllers.js';

const router = express.Router();

//posts route
router.route('/').post(uploadPostPhoto, createPosts).get(getPosts);
router
  .route('/:id')
  .get(getPost)
  .put(uploadPostPhoto, updatePost)
  .delete(deletePost);

export default router;
