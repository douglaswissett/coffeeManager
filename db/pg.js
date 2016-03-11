var pgp = require('pg-promise')({
    // Initialization Options
});
var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'coffee_shop',
    user: 'dan',
    password: 'wak24pie'
};

var db = pgp(cn);

function addItem() {
  db.one("insert into orders(drink_name, size, price, ready, comments)\
  values (${drink_name}, ${size}, ${proce}, ${ready}, ${comments}) returning order_id;", req.body)
    .then(function(order) {
      res.order_id = order.id; // of whatever [id] field you use there;
      console.log(data);
    })
    .catch(function(err) {
      console.error(err);
    })
}

module.exports.addItem = addItem;
