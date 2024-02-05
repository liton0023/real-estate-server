import bcryptjs from 'bcryptjs';
import User from './modules/user.module.js';

export const signup =async(req,res,next)=>{
    console.log(req.body)
const {username,email,password}=req.body;
const hashedPassword = bcryptjs.hashSync(password,10)
const newUser = new User({username,email ,password: hashedPassword})
try{
    await newUser.save();
    res.status(201).json('user created successfully')
}
catch(err){
    next(err);
}
}