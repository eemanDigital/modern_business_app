import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import bcrypt from 'bcryptjs';
import { createSendToken } from '../utils/secreteToken.js';
import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.js';
// import validator from 'validator';

export const signup = catchAsync(async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  //where invalid email is provided or passwords are the same
  if (!email || !username)
    return next(new AppError('All fields must be fielded', 400));

  //check if user already exist using email
  const existingUser = await User.findOne({ email });
  if (existingUser) return next(new AppError('User already exist', 401));

  //create newUser
  const newUser = await User.create({
    username,
    email,
    password,
    confirmPassword,
  });
  // create token
  createSendToken(newUser, 201, res);
});

//Handles user login
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // Input validation
  if (!email || !password) {
    return next(new AppError('Provide both email and password', 400));
  }
  // Find user and compare password
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // Generate JWT token and set cookie
  createSendToken(user, 201, res);
});

// handles route protection
export const protect = catchAsync(async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }
  // get token from the headers
  const token = authorization.split(' ')[1];
  // console.log(token);

  // verify token
  const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
  // assign _id to user/extract id  alone
  req.user = await User.findOne({ _id }).select('_id');
  next();
});
