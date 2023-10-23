import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from './login.js';
import signuprouter from './signup.js';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbname: 'PennyWiseDB'
        });
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

// app.get('/', (req, res) => {
//     res.send("HOW ARE YOU BABY")
// })

app.use(express.json());
app.use('/', router)
app.use('/', signuprouter)
app.use(cors())
app.use(cookieParser())


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

// console.log(process.env.MONGO)
app.listen(3000, () => {
    connect();
    console.log("Connected to backend.");
});