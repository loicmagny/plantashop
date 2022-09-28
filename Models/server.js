'use strict';
const express = require("express");
const Products = require('./ProductsModel.js')

const app = express();
const fs = require('fs');
const { resolve } = require('path');


app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", function (req, res) {
    res.render('home')
});

app.get("/products", (req, res) => {
    let prod = new Products();
    DisplayJSONDatas(prod.getAllProducts())
    console.log(prod.getAllProducts)
})

app.listen('8000', 'localhost', () => {
    console.log('server start')
})