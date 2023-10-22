const { default: mongoose } = require("mongoose");

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
        type: 'Number',
        required: true
    },
    date: {
        type: 'Date',
        required: true
    }
})

const TransactionSchema = mongoose.model('TransactionSchema', Transaction)
module.exports = { TransactionSchema }