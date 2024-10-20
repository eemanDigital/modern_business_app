import express from 'express';
import {
  getPosts,
  createPosts,
  getPost,
  updatePost,
  deletePost,
  addCommentToPost,
  deleteCommentFromPost,
  addReplyToComment,
  deleteReplyFromComment,
} from '../controllers/postControllers.js';
import { protect, restrictTo } from '../controllers/authController.js';
import {
  getRelatedPost,
  searchAndFilterPosts,
} from '../controllers/postQuery.js';
import {
  resizeImage,
  updatePostImg,
  upload,
} from '../controllers/postImageController.js';

const router = express.Router();

router
  .route('/')
  .post(protect, restrictTo('admin', 'author'), createPosts)
  // .get(restrictTo('admin'), getPosts);
  .get(getPosts);

router.get('/search', searchAndFilterPosts);

router
  .route('/:id/upload')
  .patch(protect, upload.single('photo'), resizeImage, updatePostImg);

router.get('/:id/relatedPosts', getRelatedPost);
router.post('/:id/comments', protect, addCommentToPost);
router.post('/:postId/comments/:commentId/replies', protect, addReplyToComment);
router.delete(
  '/:postId/comments/:commentId/replies/:replyId',
  protect,
  deleteReplyFromComment
);

router.delete(
  '/posts/:postId/comments/:commentId',
  protect,
  deleteCommentFromPost
);

router
  .route('/:id')
  .get(getPost)
  .put(protect, restrictTo('admin', 'author'), updatePost)
  .delete(protect, restrictTo('admin', 'author'), deletePost);

export default router;
