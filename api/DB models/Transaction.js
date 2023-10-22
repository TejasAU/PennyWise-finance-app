const { default: mongoose } = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        _id:{
            type: String,
            required: true
        },
        transactionid:{
            type:String,
            required: true
        },
        category:{
            type:String,
            required: true
        },
        type:{
            type:String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        },
        date:{
            type: Date,
            required: true
        },
        email:{
            type:String,
            required: true
        }
    }
)

const transactionCollection=mongoose.model("transactionCollection", transactionSchema)

module.exports=userCollection;