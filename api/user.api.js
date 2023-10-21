const { default: mongoose } = require("mongoose");

// User Schema :
const userSchema = new mongoose.Schema({
    name : {
        type: "string",
        required: true,
    },
    email : {
        type: "string",
        required: true,
    },
    passwords : {
        type: "string",
        required: true,
    },
    contact_no : {
        type : "string",
        required: false,
    },
    // 
    location : {
        type: "string",
        required: false,
    }
    //
})

const userCollection = mongoose.model("userCollection", userSchema)