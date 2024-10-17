import mongoose from 'mongoose';
import slugify from 'slugify';

// reply schema
const replySchema = new mongoose.Schema({
  commentBody: {
    type: String,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: {
    type: Date,
    default: Date.now,
  },
});

// comments schema
const commentSchema = new mongoose.Schema({
  commentBody: {
    type: String,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: {
    type: Date,
    default: Date.now,
  },
  replies: [replySchema],
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  slug: String,
  body: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: String,
    enum: ['Technology', 'Politics', 'Business', 'Sports', 'Entertainment'],
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
  photo: String,

  featured: {
    type: Boolean,
    default: false,
  },

  comments: [commentSchema],

  relatedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

// indexing for full text search
postSchema.index({ title: 'text', body: 'text', tags: 'text' });

// hook to populate the author field
postSchema.pre(/find/, function (next) {
  this.populate('author');

  next();
});

// populate author comment
postSchema.pre(/find/, function (next) {
  this.populate('author').populate('comments.author');
  next();
});

// generate slug for url
postSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });

  next();
});

export const Post = mongoose.model('Post', postSchema);
