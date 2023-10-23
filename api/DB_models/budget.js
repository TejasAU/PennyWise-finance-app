import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        budgetTitle: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        targetDate: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
)

const budgetCollection = mongoose.model("budgetsCollection", budgetSchema, 'Budget')

export default budgetCollection