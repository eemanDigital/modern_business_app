import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  body: {
    type: String,
    required: true,
  },
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      body: String,
      date: Date,
    },
  ],

  photo: String,
});

// postSchema.post('save', function () {
//   this.date.toLocaleString('en-us', { month: 'long', year: 'numeric' });

//   // next();
// });

export const Post = mongoose.model('Post', postSchema);
