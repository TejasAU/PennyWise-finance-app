import express from "express";
import Budget from "./DB_models/budget.js"
import { MongoClient } from "mongodb";

const router = express.Router();

const client = new MongoClient("mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/")
const db = client.db('PennyWiseDB');

router.post('/budget', async(req, res) => {
    const newBudget = new Budget(req.body)
    try{
        const savedBudget = await newBudget.save()
        res.status(200).json(savedBudget)
    }catch(err){
        res.status(500).json(err)
    }
})

export default router