import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import authRouter from './controllers/router/auth.route.js';
import listingRouter from './controllers/router/listing.route.js';
import userRouter from './controllers/router/user.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleweres
// app.use(cors());
app.use(express.json())
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bzjru.mongodb.net/real-estate?retryWrites=true&w=majority`;
 
mongoose.connect(uri)
.then(()=>{
    console.log('conncet to mongoDb')
})
.catch((err)=>{
    console.log(err);
})

const _dirname = path.resolve();

app.get("/", (req, res) => {
    res.send("boss in running");
  });
  
  app.listen(port, () => {
    console.log(` Boss is running on ${port}`);
  });


  app.use('/api/user', userRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/listing',listingRouter)

  app.use(express.static(path.join(_dirname, '/client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'));
  })

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
