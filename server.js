
const express = require("express");
const app = express();
const fs = require('fs').promises;
const { resolve } = require('path');

app.set('views', './views')
app.set('view engine', 'ejs')

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:


app.get("/", function (req, res) {
    res.render('home')
});

app.get("/products", (req, res) => {

    readTextFile("Datas/products.json", function (text) {
        res.json(JSON.parse(text));
    });
})


app.listen('8000', 'localhost', () => {
    console.log('server start')
})