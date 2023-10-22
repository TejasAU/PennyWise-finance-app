const { default: mongoose } = require("mongoose");

const rewardsSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
    },
    rewardsTitle:{
        type: String,
        required: true,
    },
    challengeTitle:{
        type: String,
        required: true,
    },
})

const userRewardsCollection = mongoose.model("userRewardsCollection", userRewardsSchema)

module.exports=userRewardsCollection;