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

const userCollection = mongoose.model("userCollection", userSchema)

// userCollection.updateOne({_id: 1,
//         name : 'Yash Jugade',
//         email : 'yjugade@gmail.com',
//         password : '12345',
//         contact_no : '9527332805',
//         location :  'Pune'})



 module.exports=userCollection;