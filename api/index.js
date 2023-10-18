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
            // database=client.db(DATABASENAME);
            console.log("Connected to Database");
        }catch(error){
            console.error('Error connecting to MongoDB:', error);
        }   
    // })
})



// const { MongoClient } = require('mongodb');

// // Replace with your MongoDB Atlas connection string
// const CONNECTION_STRING = 'mongodb+srv://bhaaveshw:<Pennywise2125>@pennywise.vvlnwo3.mongodb.net/';

// async function checkMongoDBConnection() {
//   const client = new MongoClient(CONNECTION_STRING, { useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');

//     // Ping the server to check the connection
//     const adminDb = client.db('admin');
//     const pingResult = await adminDb.command({ ping: 1 });
//     console.log('Ping result:', pingResult);

//     // List the available databases
//     const dbList = await client.db().admin().listDatabases();
//     console.log('Available databases:');
//     dbList.databases.forEach((db) => {
//       console.log(`- ${db.name}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   } finally {
//     // Close the connection when done
//     await client.close();
//   }
// }

// checkMongoDBConnection();
