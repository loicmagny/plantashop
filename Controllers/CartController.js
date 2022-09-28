let Cart = require('./Models/CartModel.js');
const events = require('events');
let add = new events.EventEmitter();
// document.querySelector('#add_cart').addEventListener('click', function() {
//     let _id = document.getElementById('card').id.replace(/\D/g, '');
//     console.log(_id);
// });

const test = new Cart();


