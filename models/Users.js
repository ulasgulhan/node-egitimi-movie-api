const mongoose = require('mongoose');
const {models} = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
})

module.exports = mongoose.model('user', UserSchema);