const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://movie-user:abcd1234@cluster0.sfmeh64.mongodb.net/?retryWrites=true&w=majority')
    mongoose.connection.on('open', () => {
        //console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};