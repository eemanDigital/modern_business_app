import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'You must provide a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'You must provide a second name'],
  },

  email: {
    type: String,
    required: [true, 'Provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please, provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Provide a password'],
    minlength: [8, 'Password must be at least 8 characters, got {VALUE}'],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Confirm your password'],
    validate: {
      //ensure pwd and confirm pwd are the same
      validator: function (el) {
        return el === this.password;
      },
      message: 'password and confirmPassword are not the same',
    },
  },
  passwordChangeAt: {
    type: Date,
    default: new Date(),
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  // hash user password
  this.password = await bcrypt.hash(this.password, 12);

  //delete confirmPassword after
  this.confirmPassword = undefined;
  next();
});

const User = new mongoose.model('User', userSchema);
export default User;
