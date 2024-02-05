import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// middleweres
// app.use(cors());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bzjru.mongodb.net/?retryWrites=true&w=majority`;
 
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
