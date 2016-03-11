'use strict';
var pgp = require('pg-promise')({
    // Initialization Options
});
var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'coffee_shop',
    user: 'douglaswalker',
    password: process.env.DB_PASS
};

var db = pgp(cn);

function addItem(req, res, next) {
  db.one(`insert into orders
  (drink_name, size, price, ready, comments)
  values ($1, $2, $3, $4, $5) returning order_id;`,[
    req.body.drink_name,
    req.body.size,
    req.body.price,
    req.body.ready,
    req.body.comments])
    .then(function(data) {

      res.order_id = data;
      next();
    })
    .catch(function(err) {
      console.error(err);
    })
}

module.exports.addItem = addItem;
