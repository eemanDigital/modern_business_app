import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import { globalErrorHandler } from './controllers/errorController.js';
import AppError from './utils/appError.js';
import mongoose from 'mongoose';
import postRouter from './routes/postRoute.js';
import userRouter from './routes/userRoute.js';
import aiRouter from './routes/aiRoute.js';
import cookieParser from 'cookie-parser';

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  //to shut down out application due to the db error
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});
// console.log(x);

dotenv.config({ path: './../config.env' });

const app = express();
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_LOCAL, {})
  .then(() => console.log('Connected'))
  .catch((err) => console.error(err));
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.static('public'));
// app.use(bodyParser.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  // console.log(req.headers.authorization);

  next();
});

// Mounting routes
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/generate', aiRouter);
//handle non-existent page
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error middleware handler
app.use(globalErrorHandler);

// console.log(app.get('env'));
// console.log(process.env);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});

//ALL PROMISE REJECTION
//UNHANDLED REJECTION ERROR: e.g. where db is down
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  //to shut down out application due to the db error
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
