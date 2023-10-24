import express from "express";
import Budget from "../DB_models/budget.js"

export const createBudget = (async (req, res) => {
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

export const updateBudget = (async (req, res) => {
    // newBudget._id = newBudget.budgetTitle;
    try {
        const savedBudget = await Budget.findByIdAndUpdate(
            req.params._id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(savedBudget)
    } catch (err) {
        // res.status(500).json(err)
        console.log(err);
    }
})

export const deleteBudget = (async (req, res) => {
    // const newUser = new User(req.body)
    try {
        await Budget.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("User deleted");
    } catch (err) {
        console.log(err)
    }
});

export const getBudget = (async (req, res) => {
    try {
        const savedUser = await Budget.findById(req.params.id);
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});
