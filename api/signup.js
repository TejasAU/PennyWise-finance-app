import express from "express";
import User from "./DB_models/User.js"
import { MongoClient } from "mongodb";

const signuprouter = express.Router();

// Create User :
signuprouter.post('/signup', async (req, res) => {
  const newUser = new User(req.body)
  try {
    const savedUser = await newUser.save()
    res.status(200).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Update User
signuprouter.put('/signup/:id', async (req, res) => {
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
signuprouter.delete('/signup/:id', async (req, res) => {
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
signuprouter.get('/signup/:id', async (req, res) => {
  try {
    const savedUser = await User.findById(req.params.id);
    res.status(200).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get all :
signuprouter.get('/signup', async (req, res) => {
  try {
    const savedUser = await User.find();
    res.status(200).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});



export default signuprouter