const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    contact_no: {
        type: 'String',
        required: true,
    },
    // 
    location: {
        type: 'String',
        required: false,
    }
    //
})

const userCollection = mongoose.model('userCollection', userSchema)

module.exports = userCollection;