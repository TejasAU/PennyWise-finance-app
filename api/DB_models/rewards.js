const { default: mongoose } = require("mongoose");

const rewardsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    rewardsTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    difficulty: { //can remove this
        type: String,
        required: false,
    },
    points: {
        type: String,
        required: true,
    },
    challengeTitle: {
        type: String,
        required: true,
    },
})

const rewardsCollection = mongoose.model("rewardsCollection", rewardsSchema)

module.exports = rewardsCollection;