import express from "express";
import User from "./DB_models/User.js"
import { MongoClient } from "mongodb";

const router = express.Router();
router.post('/', async(req, res) => {
    const newUser = new User(req.body)
    try{
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    } 
})

export default router