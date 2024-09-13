import express from 'express';
import { signup, login, logout } from '../controllers/authController.js';

const userRouter = express.Router();

userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);
userRouter.route('/logout').get(logout);

export default userRouter;
