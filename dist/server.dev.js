'use strict';

var express = require('express');

var app = express();

var fs = require('fs');

var _require = require('path'),
    resolve = _require.resolve;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express["static"]('public')); //Routes

app.get('/', function (req, res) {
  fs.readFile('Datas/products.json', function (err, data) {
    if (err) throw err;
    res.render('home', {
      products: JSON.parse(data)
    });
  });
});
app.get("/nursery", function (req, res) {
  res.render('nursery');
});
app.get("/cart", function (req, res) {
  res.render('cart');
});
app.get("/shop", function (req, res) {
  fs.readFile('./Datas/products.json', function (err, data) {
    if (err) throw err;
    res.render('shop', {
      products: JSON.parse(data)
    });
  });
});
app.get("/login", function (req, res) {
  res.render('login');
});
app.listen('8000', 'localhost', function () {
  console.log('server start');
});