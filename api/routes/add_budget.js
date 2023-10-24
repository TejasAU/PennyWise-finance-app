import express from "express";
import Budget from "../DB_models/budget.js"
import {
    createBudget,
    updateBudget,
    deleteBudget,
    getBudget
} from "../controllers/budget.js"
import { verifyUser } from "../utils/verifyTokens.js"
const budgetRouter = express.Router();

budgetRouter.post('/budget', verifyUser, createBudget);

budgetRouter.put('/budget/:_id',verifyUser,updateBudget);

budgetRouter.delete('/budget/:_id', verifyUser, deleteBudget);

budgetRouter.delete('/budget/:_id', verifyUser, getBudget);

// budgetRouter.get('/budget/:id', async (req, res) => {
//     try {
//         const savedBudget = await Budget.findById(req.params.id);
//         res.status(200).json(savedBudget)
//     } catch (err) {
//         //   res.status(500).json(err)
//         console.log(err);
//     }
// });

export default budgetRouter