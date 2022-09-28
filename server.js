'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const { resolve } = require('path');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routes
app.get('/', function(req, res) {
	fs.readFile('Datas/products.json', (err, data) => {
		if (err) throw err;
		res.render('home', {
			products: JSON.parse(data)
		});
	});
});

app.get("/nursery", function (req, res) {
    res.render('nursery')
});
app.get("/cart", function (req, res) {
    res.render('cart')
});

app.get("/shop", function (req, res) {
    fs.readFile('./Datas/products.json', (err, data) => {
		if (err) throw err;
		res.render('shop', {
			products: JSON.parse(data)
		});
	});
});
app.get("/login", function (req, res) {
    res.render('login')
});

app.get("/profil", function (req, res) {
    res.render('profil')
});

app.get("/product/:id", function (req, res) {
    fs.readFile('Datas/products.json', (err, data) => {
		if (err) throw err;
		const id = Number(req.params.id)
		res.render('product', {
			products: JSON.parse(data),
			id: id
		});
	});
});

app.listen('8000', 'localhost', () => {
	console.log('server start');
});
