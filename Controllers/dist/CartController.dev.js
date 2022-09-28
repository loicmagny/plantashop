"use strict";

var Cart = require('./Models/CartModel.js');

var events = require('events');

var add = new events.EventEmitter(); // document.querySelector('#add_cart').addEventListener('click', function() {
//     let _id = document.getElementById('card').id.replace(/\D/g, '');
//     console.log(_id);
// });

var test = new Cart();