import express from 'express';
import {
  signup,
  login,
  logout,
  protect,
  restrictTo,
} from '../controllers/authController.js';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  upgradeUser,
} from '../controllers/userController.js';

const userRouter = express.Router();

// Public routes
userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);
userRouter.route('/logout').get(logout);

// Routes that require authentication
userRouter.use(protect);

userRouter.route('/').get(getUsers);

userRouter.route('/:id').get(getUser).delete(restrictTo('admin'), deleteUser);
userRouter.patch('/updateUser', updateUser);
userRouter.patch('/:id/upgrade', restrictTo('admin'), upgradeUser);

export default userRouter;
