import '../utils/config.js';
import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import bcrypt from 'bcryptjs';
import { promisify } from 'util';
import { createSendToken } from '../utils/secreteToken.js';
import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.js';
// import validator from 'validator';

export const signup = catchAsync(async (req, res, next) => {
  const { firstName, lastName, role, email, password, confirmPassword } =
    req.body;

  // Check if all required fields are provided
  if (!email || !firstName || !lastName || !password || !confirmPassword)
    return next(new AppError('All fields must be filled', 400));

  // Check if user already exists using email
  const existingUser = await User.findOne({ email });
  if (existingUser) return next(new AppError('User already exists', 401));

  // Create new user
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    role,
    password,
    confirmPassword,
  });

  // Convert newUser to a plain JavaScript object
  const userObject = newUser.toObject();

  // Remove password and confirmPassword fields
  delete userObject.password;
  delete userObject.confirmPassword;

  // Send response
  res.status(201).json({
    status: 'success',
    data: {
      user: userObject,
    },
  });
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

// protect access handler
export const protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 2) Verification of token
  const verified = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // 3) Check if user still exists
  const currentUser = await User.findById(verified.id);
  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token no longer exists.', 401)
    );
  }

  // 4) Grant access to protected route
  req.user = currentUser;
  next();
});
// Logout handler
export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now()), // Cookie expires in 10 seconds
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'You have been logged out successfully',
  });
};

// Restrict access to certain routes
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    next();
  };
};
