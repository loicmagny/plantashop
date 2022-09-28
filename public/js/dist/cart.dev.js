"use strict";

function CatchValues(_id) {
  var cart = sessionStorage.getItem('cart');

  if (cart) {
    cart += _id + '|';
    sessionStorage.setItem('cart', cart);
  } else if (!cart) {
    cart = _id + '|';
    sessionStorage.setItem('cart', cart);
  }
}

function displayCart() {
  var products = sessionStorage.getItem('cart');
  var cart = [];

  if (products) {
    cart = products.split('|').filter(Boolean);
  }

  console.log(cart);
  fetch('./Datas/products.json').then(function (response) {
    return response.json();
  }).then(function (datas) {
    console.log(datas);

    for (var j = 0; j < datas.length; j++) {
      for (var i = 0; i < cart.length; i++) {
        if (cart[i] == datas[j].id) {
          var card = document.createElement('div');
          card.setAttribute('class', 'cart_content_items_item');
          card.setAttribute('id', 'card_' + datas[j].id);
          var img = document.createElement('img');
          img.setAttribute('class', 'card_img');
          img.setAttribute('src', datas[j].img);
          var p = document.createElement('p');
          p.innerText = 'Prix: ' + datas[j].price;
          p.setAttribute('onclick', 'CalcPrice(' + datas[j].id + ',)');
          p.setAttribute('id', 'price_' + datas[j].id);
          var div = document.createElement('div');
          var plus = document.createElement('i');
          plus.innerText = '+';
          plus.setAttribute('onclick', 'AddQuantity(' + datas[j].id + ',' + datas[j].price + ')');
          var amount = document.createElement('p');
          amount.innerText = '1';
          amount.setAttribute('id', 'amount_' + datas[j].id);
          var minus = document.createElement('i');
          minus.innerText = '-';
          minus.setAttribute('onclick', 'RemoveQuantity(' + datas[j].id + ',' + datas[j].price + ')');
          var total = document.createElement('p');
          total.innerText = 'Prix Total';

          var _delete = document.createElement('p');

          var trash = document.createElement('i');
          trash.setAttribute('class', 'fa-solid fa-trash');
          trash.setAttribute('style', 'color: red;');
          trash.setAttribute('onclick', 'RemoveFromCart(' + datas[j].id + ')');
          card.appendChild(img);
          card.appendChild(p);
          div.appendChild(plus);
          div.appendChild(amount);
          div.appendChild(minus);
          card.appendChild(div);
          card.appendChild(total);

          _delete.appendChild(trash);

          card.appendChild(_delete);
          document.getElementById('cart').appendChild(card);
        }
      }
    }
  })["catch"](function (error) {
    return console.log(error);
  });
}

displayCart();

function AddQuantity(id, price) {
  var amount = document.getElementById('amount_' + id).textContent;
  amount = parseInt(amount);
  amount++;
  document.getElementById('amount_' + id).textContent = amount;
  CalcPrice(id, true, price);
}

function RemoveQuantity(id, price) {
  var amount = document.getElementById('amount_' + id).textContent;
  amount = parseInt(amount);

  if (amount > 1) {
    amount--;
    document.getElementById('amount_' + id).textContent = amount;
    CalcPrice(id, false, price);
  }
}

function CalcPrice(id, add, price) {
  var amount = parseInt(document.getElementById('amount_' + id).textContent.replace(/\D/g, ''));

  if (add) {
    document.getElementById('price_' + id).textContent = 'Prix: ' + price * amount;
  } else if (!add) {
    document.getElementById('price_' + id).textContent = 'Prix: ' + price * amount--;
  }
}

function RemoveFromCart(id) {
  var cart = sessionStorage.getItem('cart').split('|').filter(Boolean);
  console.log(id);

  if (cart) {
    if (cart.length > 1) {
      sessionStorage.setItem('cart', cart.pop(parseInt(id)));
    } else if (cart.length < 1) {
      console.log('oui');
      sessionStorage.removeItem('cart');
    }

    document.getElementById('card_' + id + '').remove();
  }
}