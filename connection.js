const mongoose = require('mongoose');
const User = require('./Models/userSchema');

const connection = "mongodb://mongo:27017/mongo-test";

const connectDB = () =>{
    return mongoose.connect(connection);
}

module.exports = connectDB;