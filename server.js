'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const { resolve } = require('path');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
	fs.readFile('Datas/products.json', (err, data) => {
		if (err) throw err;
		res.render('home', {
			products: JSON.parse(data)
		});
	});
});

app.listen('8000', 'localhost', () => {
	console.log('server start');
});
