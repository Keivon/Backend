const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    address: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    typeOfUser: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    profession: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    latitude: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }},

    {timestamps: true,

});

const User = mongoose.model('User', userSchema);

module.exports = User;