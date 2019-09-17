var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require("express-session");

var createScheduleRouter = require('./routes/createSchedule');
var usersRouter = require('./routes/users');

var app = express();
app.set('view engine', 'pug');
app.use("/static", express.static("static"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', createScheduleRouter);
app.use('/users', usersRouter);

module.exports = app;