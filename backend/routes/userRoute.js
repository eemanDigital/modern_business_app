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
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.route('/login').post(login);
userRouter.route('/logout').get(logout);

userRouter.use(protect);
userRouter.use(restrictTo('admin'));
userRouter.route('/signup').post(signup);
userRouter.route('/').get(getUsers);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default userRouter;
