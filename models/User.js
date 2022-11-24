const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    token: String,
    firstName: String,
    username: String,
    password: String,
})

const User = mongoose.model('users', userSchema);

module.exports = User;