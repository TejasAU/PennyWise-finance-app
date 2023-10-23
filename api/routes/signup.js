import express from "express";
// import User from "../DB_models/User.js"
import register from '../controllers/auth.js';


const signupRouter = express.Router();

// Create User :
signupRouter.post('/signup', register);

// Update User
signupRouter.put('/signup/:id', async (req, res) => {
  // const newUser = new User(req.body)
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err)
  }
});

//Delete User:
signupRouter.delete('/signup/:id', async (req, res) => {
  // const newUser = new User(req.body)
  try {
    await User.findByIdAndDelete(
      req.params.id,
    );
    res.status(200).json("User deleted");
  } catch (err) {
    console.log(err)
  }
});

// Get User :
signupRouter.get('/signup/:id', async (req, res) => {
  try {
    const savedUser = await User.findById(req.params.id);
    res.status(200).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get all :
signupRouter.get('/signup', async (req, res) => {
  try {
    const savedUser = await User.find();
    res.status(200).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});



export default signupRouter