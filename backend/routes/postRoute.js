import express from 'express';
import {
  getPosts,
  createPosts,
  getPost,
  updatePost,
  deletePost,
  updatePostImg,
  upload,
  addCommentToPost,
} from '../controllers/postControllers.js';
import { protect, restrictTo } from '../controllers/authController.js';
import {
  getRelatedPost,
  searchAndFilterPosts,
} from '../controllers/postQuery.js';

const postRouter = express.Router();

postRouter
  .route('/')
  .post(protect, restrictTo('admin', 'author'), createPosts)
  // .get(restrictTo('admin'), getPosts);
  .get(getPosts);

postRouter.get('/search', searchAndFilterPosts);

postRouter
  .route('/:id/upload')
  .patch(protect, upload.single('photo'), updatePostImg);

postRouter.get('/:id/relatedPosts', getRelatedPost);
postRouter.post('/:id/comments', protect, addCommentToPost);
postRouter
  .route('/:id')
  .get(getPost)
  .put(protect, restrictTo('admin', 'author'), updatePost)
  .delete(protect, restrictTo('admin', 'author'), deletePost);

export default postRouter;
