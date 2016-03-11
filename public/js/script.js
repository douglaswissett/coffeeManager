'use strict';
console.log('react linked');

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


const App = React.createClass({

  getInitialState : function() {
    return {
      orders : {}
    }
  },

  render : function() {
    return (
      <div>
        <CreateOrderForm />
      </div>
    )
  }
});



const CreateOrderForm = React.createClass({
  render : function() {
    return (
      <div className="container">
        
          <span>Menu</span>

      </div>
    )
  }
});





let $container = document.getElementById('container');
ReactDOM.render(<App />, $container);