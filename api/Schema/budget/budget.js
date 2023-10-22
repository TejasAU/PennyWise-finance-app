const { default: mongoose } = require("mongoose");
const Budget = new mongoose.Schema({
    budgetName: {
        type: 'String',
        required: true
    },
    Type: {
        type: 'String',
        required: true
    },
    catagory: {
        type: 'String',
        required: true
    },
    amount: {
        type: 'Number',
        required: true
    }
})

const BudgetSchema = mongoose.model('BudgetSchema', Budget)
module.exports = { BudgetSchema }