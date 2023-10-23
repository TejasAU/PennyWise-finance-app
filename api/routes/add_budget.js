import express from "express";
import Budget from "../DB_models/budget.js"

const budgetRouter = express.Router();

budgetRouter.post('/budget', async (req, res) => {
    const newBudget = new Budget(req.body)
    newBudget._id = newBudget.budgetTitle;
    try {
        const savedBudget = await newBudget.save()
        res.status(200).json(savedBudget)
    } catch (err) {
        // res.status(500).json(err)
        console.log(err);
    }
})

budgetRouter.get('/budget/:id', async (req, res) => {
    try {
        const savedBudget = await Budget.findById(req.params.id);
        res.status(200).json(savedBudget)
    } catch (err) {
        //   res.status(500).json(err)
        console.log(err);
    }
});

export default budgetRouter