var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
const multer = require('multer');

const userCollection = require('./Schema/Main_Schema/userSchema');
var app = Express();
app.use(cors());

// var CONNECTION_STRING = "mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/?retryWrites=true&w=majority"; 

// var DATABASENAME = "PennyWiseDB";
// var database;

// const client = new MongoClient(CONNECTION_STRING);
// app.listen(3000, async () => {
//     // MongoClient.connect(CONNECTION_STRING,(error, client) => {
//         try{
//             await client.connect();
//             database=client.db(DATABASENAME);
//             console.log("Connected to Database");
//         }catch(error){
//             console.error('Error connecting to MongoDB:', error);
//         }   
//     // })
// })


// // Routes :- 

// app.get("/", (req, res) => {
//     // res.send("Welcome");
//     database.collection("PennyWiseDB").find({}).toArray((error,result) => {
//         res.send(result);
//     })
// })


// const new_user = new userCollection({
//     _id : 1,
//     name : 'John Doe',
//     email : 'john@gmail.com' ,
//     passwords : "123",
//     contact_no : '1234567890',
//     location : 'pune'
// })
const new_user = new userCollection({
    _id : '4',
    name : 'Deepak Doe',
    email : 'john@gmail.com' ,
    passwords : "123",
    contact_no : '1234567890',
    location : 'pune'
})

// async function create(new_user) {
//     try{
//         return await new_user.save()
//     } catch (error){
//         throw error
//     }
// }
const { default: mongoose } = require('mongoose');
//
const Database = 'PennyWiseDB'
const client = new MongoClient("mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/")
const db = client.db('PennyWiseDB');


app.get("/", (req, res) => {
    // res.send("Welcome");
    db.collection("userCollection").find({}).toArray((error,result) => {
        res.send(result);
    })
})

app.listen(3000, async () => {
    mongoose.connect("mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/").then(() => {
        console.log("Mongodb connected to port 3000")
    })
    if(!db.collection("userCollection")){
        db.createCollection('userCollection');
    }
    const collection = db.collection('userCollection');
    collection.insertOne(new_user);
})