'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const bodyParser = require('body-parser');
const conf = require('./config');
const cors = require('cors');
const app = express();

// view engine setup
app.set(conf.get('app-view'), path.join(__dirname,  conf.get("app-view")));
app.set('view engine', conf.get("app-engine"));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger(conf.get('log-level')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, conf.get("app-static"))));
app.use(session({
  secret: conf.get("session:secret"),
  key: conf.get("session:key"),
  saveUninitialized: conf.get("session:saveUninitialized"),
  resave: conf.get("session:resave"),
  cookie:conf.get("session:cookie")
}));

app.use(cors({ origin: true, credentials: true }));
app.options(cors({ origin: true, credentials: true }));

console.log(' * * * STARTING * * * \n\n');

//  messages all project getMessage
// global.getMessage = require(`${__dirname}/messages/`);

// API routes - versioned!
conf.get("API_VERSIONS").map(version => {
  app.use(`/api/${version}/`, require(`./api/${version}`));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


module.exports = app;
