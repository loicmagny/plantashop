class Products {

    constructor(id = 0, name = '', description = '', stars = 0, price = 0, img = 0, water = 0, light = 0, temperature = 0, humidity = 0) {
        this.id = id
        this.name = name
        this.description = description
        this.stars = stars
        this.price = price
        this.img = img
        this.water = water
        this.light = light
        this.temperature = temperature
        this.humidity = humidity
    }

    //get id() {
    //    return this.id
    //}
    //get name() {
    //    return this.name
    //}
    //get description() {
    //    return this.description
    //}
    //get stars() {
    //    return this.stars
    //}
    //get price() {
    //    return this.price
    //}
    //get img() {
    //    return this.img
    //}
    //get water() {
    //    return this.water
    //}
    //get light() {
    //    return this.light
    //}
    //get temperature() {
    //    return this.temperature
    //}
    //get humidity() {
    //    return this.humidity
    //}
    //set id(value) {
    //    this.id = value
    //}
    //set name(value) {
    //    this.name = value
    //}
    //set description(value) {
    //    this.description = value
    //}
    //set stars(value) {
    //    this.stars = value
    //}
    //set price(value) {
    //    this.price = value
    //}
    //set img(value) {
    //    this.img = value
    //}
    //set water(value) {
    //    this.water = value
    //}
    //set light(value) {
    //    this.light = value
    //}
    //set temperature(value) {
    //    this.temperature = value
    //}
    //set humidity(value) {
    //    this.humidity = value
    //}

    getAllProducts() {
        const fs = require('fs');
        fs.readFile('Datas/products.json', (err, data) => {
            if (err) throw err;
            console.log(JSON.parse(data))
            return JSON.parse(data)
        });
    }
}
module.exports = Products