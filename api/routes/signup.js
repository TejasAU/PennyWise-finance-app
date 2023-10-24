import express from "express";
// import User from "../DB_models/User.js"
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser
} from "../controllers/user.js"
import register from '../controllers/auth.js';
import { verifyToken, verifyUser } from "../utils/verifyTokens.js";
const signupRouter = express.Router();

// Create User :
// signupRouter.post('/signup', register);
signupRouter.get('/signup/authentication', verifyToken, (req,res,next)=>{
  res.send("Logged in ");
})
signupRouter.get('/signup/checkUser/:id', verifyUser, (req,res,next)=>{
  res.send("You are allowed ");
})

// Update User
signupRouter.put('/signup/:id', verifyUser, updateUser);

//Delete User:
signupRouter.delete('/signup/:id',verifyUser, deleteUser);

// Get User :
signupRouter.get('/signup/:id', verifyUser, getUser);

// Get all :
// signupRouter.get('/signup', getAllUser);

export default signupRouter