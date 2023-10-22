
const Budget = new mongoose.Schema({
    budgetName: {
        type: 'String',
        required: true
    },
    Type: {
        type: 'String',
        required: true
    },
    category: {
        type: 'String',
        required: true
    },
    amount: {
        type: 'Number',
        required: true
    }
})

const BudgetSchema = mongoose.model('BudgetSchema', Budget)
model.exports = { BudgetSchema }