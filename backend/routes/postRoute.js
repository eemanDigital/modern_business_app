import express from 'express';
import {
  getPosts,
  createPosts,
  getPost,
  updatePost,
  deletePost,
} from '../controllers/postControllers.js';

const router = express.Router();

//posts route
router.route('/').post(createPosts).get(getPosts);
router.route('/:id').get(getPost).put(updatePost).delete(deletePost);

export default router;
