'use strict';
const express     = require('express');
const beverages   = express.Router();
const db          = require('../db/pg');

// beverages route
beverages.route('/')
  .get( (req, res) => {
    // get beverages
    res.send(req.method);
  })
  .post( db.addItem, (req, res) => {
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