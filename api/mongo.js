// const { default: mongoose } = require('mongoose');

// const budget = require('./DB_models/budget')
// const challenges = require('./DB_models/challenges')
// const rewards = require('./DB_models/rewards')
// const Transaction = require('./DB_models/Transaction')
// const user_reward_data = require('./DB_models/user_reward_data')
// const User = require('./DB_models/User')

// // const Database = 'PennyWiseDB'
// const client = new MongoClient("mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/")
// const db = client.db('PennyWiseDB');

// async function checkCollectionsExist(e) {
//     const collectionNames = [
//         'User_c',
//         'Transaction_collection',
//         'budget_collection',
//         'challenges_collection',
//         'rewards_collection',
//         'user_reward_data_collection',
//     ];

//     try {
//         for (const collectionName of collectionNames) {
//             const collectionExists = collections.some(collection => collection.name === collectionName);
//             if (!collectionExists) {
//                 await db.createCollection(collectionName);
//                 console.log(`Created collection ${collectionName}`);
//             }
//         }
//     } catch (e) {
//         console.log(e.message[0]);
//     }
// }
// (async() => {
//     const collectionExistenceArray = await checkCollectionsExist();
// })

// module.exports = connect;

// // const new_user = new User({
// //     name: 'Deepak Doe',
// //     email: 'john@gmail.com',
// //     passwords: "123",
// //     contact_no: '1234567890',
// //     location: 'pune'
// // })

// // const userTransactions = new Transaction({
// //     transactionid: '1',
// //     category: 'expense',
// //     type: 'food',
// //     amount: '100',
// //     date: '10-08-03',
// //     email: 'john@gmail.com'
// // })

// // const userBudget = new budget({
// //     budgetTitle: 'FOOD',
// //     category: 'expense',
// //     type: 'food',
// //     amount: '500',
// //     targetDate: '20-10-03',
// //     email: 'john@gmail.com'
// // })

// // const userChallenges = new challenges({
// //     challengeTitle: "abc",
// //     description: "def",
// //     difficulty: "high",
// //     points: '120',
// // })

// // const userRewards = new rewards({
// //     _id: "1",
// //     rewardsTitle: "flexi",
// //     description: "kill flexi",
// //     difficulty: "10",
// //     points: "200",
// //     challengeTitle: "C1"
// // })
// // const userRewardsData = new user_reward_data({
// //     email: 'john@gmail.com',
// //     rewardsTitle: 'flexi',
// //     challengeTitle: "C1",
// // })

// // app.get("/", (req, res) => {
// //     // res.send("Welcome");
// //     db.collection("userCollection").find({}).toArray((error, result) => {
// //         res.send(result);
// //     })
// // })

// ///////////////////////////////////////////////////
// // CREATE QUERIES for collection in MONGO :-
// // db.createCollection('User');
// // db.createCollection('Transaction');
// // db.createCollection('budget');
// // db.createCollection('challenges');
// // db.createCollection('rewards');
// // db.createCollection('user_reward_data');

// // const User_c = db.collection('User');
// // User_c.insertOne(new_user);

// // const Transaction_collection = db.collection('Transaction');
// // Transaction_collection.insertOne(userTransactions);

// // const budget_collection = db.collection('budget');
// // budget_collection.insertOne(userBudget);

// // const challenges_collection = db.collection('challenges');
// // challenges_collection.insertOne(userChallenges);

// // const rewards_collection = db.collection('rewards');
// // rewards_collection.insertOne(userRewards);

// // const user_reward_data_collection = db.collection('user_reward_data');
// // user_reward_data_collection.insertOne(userRewardsData);