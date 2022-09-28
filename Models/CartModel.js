const { EventEmitter } = require('events');

class Cart extends EventEmitter{
    constructor()

    AddToCart()
    {
        this.emit('AddToCart')
    }

}