'use strict';
const express     = require('express');
const beverages   = express.Router();
// db = require to go here

// beverages route
beverages.route('/')
  .get( (req, res) => {
    // get beverages
    res.send(req.method);
  })
  .post( (req, res) => {
    // add beverage
    res.send(req.method);
  });

beverages.route('/:orderid')
  .put( (req, res) => {
    // update ready status
    res.send(req.method);
  })
  .delete( (req, res) => {
    // delete beverage
    res.send(req.method);
  });


module.exports = beverages;