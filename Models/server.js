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
    fs.readFile('Datas/products.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(student);
    });
})

app.listen('8000', 'localhost', () => {
    console.log('server start')
})