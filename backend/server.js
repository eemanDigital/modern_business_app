import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/postRoute.js';

dotenv.config({ path: './../config.env' });

const app = express();

app.use(cors());
app.use(morgan('dev'));

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected'))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

//Mounting routes
app.use('/posts', router);

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
