
const Transaction = new mongoose.Schema({
    TransactionId: {
        type: 'Number',
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
        type: 'integer',
        required: true
    },
    date: {
        type: 'Date',
        required: true
    }
})

const TransactionSchema = mongoose.model('BudgetSchema', Transaction)
model.exports = { TransactionSchema }