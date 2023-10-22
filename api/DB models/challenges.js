const { default: mongoose } = require("mongoose");

const challengesSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    challengeTitle:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    difficulty:{
        type: String,
        required: true,
    },
    points:{
        type: String,
        required: true,
    },
})

const challengesCollection=mongoose.model("challengesModel", challengesSchema)

module.exports=challengesCollection;