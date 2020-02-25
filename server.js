var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require("express-session");

var createScheduleRouter = require('./routes/createSchedule');
var createGameRouter = require('./routes/gameRoute');
var usersRouter = require('./routes/users');

//Import the mongoose module
var mongoose = require('mongoose');
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;
const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500, 
    connectTimeoutMS: 10000,
};
//Set up default mongoose connection
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, options).then( function() {
    console.log('MongoDB is connected');
}).catch( function(err) {
    console.log(err);
});

var app = express();
app.set('view engine', 'pug');
app.use("/static", express.static("static"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', createScheduleRouter);
app.use('/game', createGameRouter);
app.use('/users', usersRouter);

module.exports = app;