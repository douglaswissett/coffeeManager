'use strict';
console.log('react linked');

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');






const App = React.createClass({

  getInitialState : function() {
    return {
      orders : {},
      menu: {}
    }
  },

  setMenuItem : function(drink) {
    var timestamp = new Date().getTime();
    this.state.menu[timestamp] = drink;
    this.setState({ menu: this.state.menu});
  },
  addOrder : function(order) {
    var timestamp = new Date().getTime();
    this.state.orders[timestamp] = order;
    this.setState({ orders: this.state.orders });
  },
  renderMenu : function(key) {
    return (
      <ItemForm key={key} index={key} details={this.state.menu[key]} addOrder={this.addOrder} />
    )
  },

  render : function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <ul className="col s4">
              <li><h4>Menu Items</h4></li>

              {Object.keys(this.state.menu).map(this.renderMenu)}

            </ul>
            <ul className="col s8">
              <li><h4>Order Queue</h4></li>



            </ul>
          </div>
          <CreateOrderForm setMenuItem={this.setMenuItem} />
        </div>
      </div>
    )
  }
});










const CreateOrderForm = React.createClass({
  handleSubmit : function(event) {
    event.preventDefault();

    let drink_name = this.refs.drink_name.value; 
    let price = this.refs.price.value;

    let drink = {
      item_name: drink_name,
      base_price: price
    }

    this.props.setMenuItem(drink);
    this.refs.menuForm.reset();
  },

  render : function() {
    return (
      <div>
        <div className="row">
          <div className="col s4">

            <h5>Add New Menu Item</h5>

            <form ref="menuForm" onSubmit={this.handleSubmit} >
              <div className="input-field">
                <input type="text" id="drink_name" ref="drink_name" />
                <label for="drink_name">Drink Name</label>
              </div>
              <div className="input-field">
                <input type="number" id="price" ref="price" />
                <label for="price">Base Price</label>
              </div>
              <div className="input-field">
                <input type="submit" value="New Menus Item" className="waves-effect waves-light btn" />
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
});


const ItemForm = React.createClass({

  handleSubmit : function(event) {
    event.preventDefault();

    let drink_name = this.refs.drink_name.value;
    let size = this.refs.size.value;
    let price = this.refs.price.value;
    let comments = this.refs.comments.value;

    let order = {
      drink_name: drink_name,
      size: size,
      price: price,
      comments: comments,
      ready: false
    }

    this.props.addOrder(order);

    this.refs.orderForm.reset();
  },

  render : function() {
    return (
      <li>
        <div>
          <form ref="orderForm" onSubmit={this.handleSubmit}>
            <input type="text" ref="drink_name" value={this.props.details.item_name} disabled />
            <select ref="size">
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="3">L</option>
            </select>
            <div className="input-field">
              <input type="text" ref="price" value={this.props.details.base_price} disabled />
            </div>
            <div className="input-field">
              <input type="text" ref="comments" id="comments"/>
              <label for="comments">Comments</label>
            </div>
            <button type="submit" className="waves-effect waves-light btn">Add To Order</button>
          </form>
        </div>
      </li>
    )
  }
});




let $container = document.getElementById('container');
ReactDOM.render(<App />, $container);