import multer from 'multer';
import sharp from 'sharp';
import streamifier from 'streamifier';
import cloudinary from '../utils/cloudinaryConfig.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';
import { Post } from '../models/postModel.js';

// Configure multer storage to store image in memory
const storage = multer.memoryStorage();

// Configure multer upload with file size limit (e.g., 5MB)
export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
  },
});

// Middleware to resize the image using sharp
export const resizeImage = async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `post-${req.params.id}-${Date.now()}.jpeg`;

  try {
    req.file.buffer = await sharp(req.file.buffer)
      .resize(300, 200) // Resize to 500x500 pixels
      .toFormat('jpeg')
      .jpeg({ quality: 90 }) // Adjust quality as needed
      .toBuffer();

    next();
  } catch (err) {
    next(new AppError('Error processing image', 500));
  }
};

// Update post image API endpoint
export const updatePostImg = catchAsync(async (req, res, next) => {
  const postId = req.params.id;

  if (!req.file) {
    return next(new AppError('No file uploaded', 404));
  }

  // Use Cloudinary's upload_stream method instead of upload
  const streamUpload = (req) => {
    // Return a promise that resolves with the result of uploading the image
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream(
        {
          folder: 'blog_post_img',
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );

      // Pipe the file buffer to the upload stream
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  // Call the streamUpload function and await the result
  const result = await streamUpload(req);

  // Update the post with the image URL
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { photo: result.secure_url },
    { new: true, runValidators: true }
  );

  // Return an error if no post found
  if (!updatedPost) {
    return next(new AppError('No post found with that ID', 404));
  }

  // Send a successful response with the updated post
  res.status(200).json({
    status: 'success',
    message: 'Post image successfully updated',
    data: {
      post: updatedPost,
    },
  });
});
