import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

// // filter fields
const filterFields = (fields, allowedFields) => {
  const filteredFields = {};
  Object.keys(fields).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredFields[key] = fields[key];
    }
  });
  return filteredFields;
};

// GET ALL USERS
export const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    results: users.length,
    data: users,
  });
});

// GET A USER
export const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError('No user found with that Id', 404));
  }

  res.status(200).json({
    user,
  });
});

// UPDATE USER PROFILE
export const updateUser = catchAsync(async (req, res, next) => {
  // Update user document
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    filterFields(req.body, ['firstName', 'lastName', 'email']),
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: 'success',
    data: {
      user: updatedUser,
    },
  });
});

// upgrade user position
export const upgradeUser = catchAsync(async (req, res, next) => {
  console.log(req.params.id);

  // Update user document
  const user = await User.findByIdAndUpdate(
    req.params.id,
    filterFields(req.body, ['role']),
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: 'success',
    data: {
      user,
    },
  });
});

// DELETE USER
export const deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  res.status(204).json({
    message: 'User deleted',
    data: null,
  });
});
