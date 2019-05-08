var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var mongoose = require('mongoose');
var session = require("express-session");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
var routes = require('./routes');
var PORT = process.env.PORT || 3001;

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
=======
app.use(session({ secret: "opus", resave: true, saveUninitialized: true }));
const passport = require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

>>>>>>> master

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
});

// Connect to the Mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/opus_db");

module.exports = app;
