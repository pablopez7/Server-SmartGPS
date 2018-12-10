const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema

const UserSchema = Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    pin: { type: Number, required: false},
    nick: String,
    img: String,
    signupDate: { type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', UserSchema)