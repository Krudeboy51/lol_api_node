var express = require('express');
var fs = require('fs');
var request = require('request');
var app = express();



var router = require('./router')(app);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

app.listen('3000', () => {
  console.log('Engene stared on port 3000');
});

module.exports = app;
