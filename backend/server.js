import './utils/config.js';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './controllers/errorController.js';
import AppError from './utils/appError.js';
import mongoose from 'mongoose';
import postRouter from './routes/postRoute.js';
import userRouter from './routes/userRoute.js';
import aiRouter from './routes/aiRoute.js';
import cookieParser from 'cookie-parser';

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://modern-business-app.onrender.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

const DB = () => {
  if (process.env.NODE_ENV === 'development') {
    return process.env.DATABASE_LOCAL;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );
  }
};

// Database connection
mongoose
  .connect(DB(), {})
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error(err));

// Custom middleware to add request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Mounting routes
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/generate', aiRouter);

// Handle non-existent routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
