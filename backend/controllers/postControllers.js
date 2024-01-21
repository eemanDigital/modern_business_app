import { Post } from '../models/postModel.js';
import path from 'path';
import multer from 'multer';

//image upload
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    );

    // console.log(req.file);
  },
});
// check if the file is an image
// const multerFilter = (req, file, cb) => {

// }
const upload = multer({
  storage: multerStorage,
});

//photo:name of the field
export const uploadPostPhoto = upload.single('file');

export const createPosts = async (req, res, next) => {
  // console.log(req.file);
  // console.log(req.body);
  const { title, body, author } = req.body;
  const { filename } = req.file;
  const post = await Post.create({
    title,
    body,
    author,
    photo: filename,
  });
  res.status(201).json({
    status: 'success',
    data: {
      post,
    },
  });
};

export const getPosts = async (req, res, next) => {
  const posts = await Post.find().sort({ date: 'desc' });

  res.status(200).json({
    status: 'success',
    data: {
      posts,
    },
  });
};

export const getPost = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  // console.log(post);
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
};

export const updatePost = async (req, res, next) => {
  const postId = req.params.id;
  const { title, body, author } = req.body;
  const { filename } = req.file;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { title, body, author, photo: filename },
    { new: true }
  );
  console.log(updatedPost);
  res.status(200).json({
    status: 'Post successfully updated',
    data: {
      updatedPost,
    },
  });
};

export const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId);

  if (!post) return next(res.status(404).json({ message: 'Not found' }));

  res.status(204).json({
    status: 'Post successfully deleted',
  });
};
