// const userCredentialsSchema = require('../Schema/signup/signup_login.js');
// const BudgetSchema = require('../Schema/budget/budget.js');
// const TransactionSchema = require('../Schema/transaction/transaction.js');

// const budget = require('./budget')
// const challenges = require('./challenges')
// const rewards = require('./rewards')
// const Transaction = require('./Transaction')
// const user_reward_data = require('./user_reward_data')
// const User = require('./User')
const { default: mongoose } = require("mongoose");

// User Schema :
const userSchema = new mongoose.Schema({
    _id: {
        type: 'String',
        required: false
    },
    userCred: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    // userTransactions: Transaction,
    // userBudget: budget,
    // userChallenges: challenges,
    // userRewards: rewards,
    // userRewardsData: user_reward_data
})

const userCollection = mongoose.model("userCollection", userSchema)
// userCollection.updateOne({_id: 1,
//         name : 'Yash Jugade',
//         email : 'yjugade@gmail.com',
//         password : '12345',
//         contact_no : '9527332805',
//         location :  'Pune'})
module.exports = userCollection;

