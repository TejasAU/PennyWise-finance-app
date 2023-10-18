var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
const multer = require('multer');

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/?retryWrites=true&w=majority"; 

var DATABASENAME = "PennyWiseDB";
var database;

const client = new MongoClient(CONNECTION_STRING);
app.listen(3000, async () => {
    // MongoClient.connect(CONNECTION_STRING,(error, client) => {
        try{
            await client.connect();
            database=client.db(DATABASENAME);
            console.log("Connected to Database");
        }catch(error){
            console.error('Error connecting to MongoDB:', error);
        }   
    // })
})


// Routes :- 

app.get("/", (req, res) => {
    // res.send("Welcome");
    database.collection("PennyWiseDB").find({}).toArray((error,result) => {
        res.send(result);
    })
})