import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // reference to a User model for author info
  },
  category: {
    type: String,
    enum: ['Tech', 'Political', 'Business', 'Sports', 'Entertainment'],
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
    index: true,
  },
  comments: [
    {
      body: String,
      date: Date,
    },
  ],
  photo: String,
  featured: {
    type: Boolean,
    default: false,
  },
  relatedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

export const Post = mongoose.model('Post', postSchema);
