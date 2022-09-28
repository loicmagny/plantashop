'use strict';

var express = require('express');

var app = express();

var fs = require('fs');

var _require = require('path'),
    resolve = _require.resolve;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  fs.readFile('Datas/products.json', function (err, data) {
    if (err) throw err;
    res.render('home', {
      products: JSON.parse(data)
    });
  });
});
app.listen('8000', 'localhost', function () {
  console.log('server start');
});