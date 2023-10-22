const { model } = require("mongoose")

const LoginSignup = new mongoose.Schema({
    name : {
        type: "string",
        required: true,
    },
    email : {
        type: "string",
        required: true,
    },
    password : {
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

const userCredentialsSchema = mongoose.model('userCredentials', LoginSignup)

model.exports = {userCredentialsSchema}