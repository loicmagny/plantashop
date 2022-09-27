'use strict';
const express = require("express");
const app = express();
const fs = require('fs');
const { resolve } = require('path');

app.set('views', './views')
app.set('view engine', 'ejs')


app.get("/", function (req, res) {
    res.render('home')
});

app.get("/products", (req, res) => {
    let rawdata = fs.readFileSync('Datas/products.json');
    let products = JSON.parse(rawdata);
    res.json(products)
})


app.listen('8000', 'localhost', () => {
    console.log('server start')
});