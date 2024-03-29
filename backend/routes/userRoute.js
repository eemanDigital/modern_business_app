import express from 'express';
import { signup, login } from '../controllers/authController.js';

const userRouter = express.Router();

userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);

export default userRouter;
