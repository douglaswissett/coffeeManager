'use strict'
var express = require('express');
var logger  = require('morgan');
var path    = require('path');

var app = express();
var _port = process.env.PORT || 3000;




app.listen(_port, () => {
  console.log('');
});