/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

class game{
    constructor(name, title, type, price, refund, hour){
        this._name = name;
        this._title = title;
        this._type = type;
        this._price = price;
        this._refund = refund;
        this._hour = hour;
    }

    get name(){
        return this._name;
    }
    
    get title(){
        return this._title;
    }

    get type(){
        return this._type;
    }

    get price(){
        return this._price;
    }

    get refund(){
        return this._refund;
    }

    get hour(){
        return this._hour;
    }
}

class Subject {
    constructor() {
        this.handlers = [];
    }
    subscribe(func) {
        this.handlers.push(func);
    }

    unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item !== func);
    }

    publish(msg, obj) {
        let scope = obj || window;
        for (let func of this.handlers) {
            func(scope, msg);
        }
    }
}

class gameInventory extends Subject {
    constructor(inventorySize) {
        super();
        this._maxSize = inventorySize;
        this._inventory = []; 
    }

    add(game) {
        if (this._inventory.length < this._maxSize) {
            this._inventory.push(game);
            this.publish("New game has been added", this);
        }
    }

    remove(game) {

    }

    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this._inventory[++idx], done: !(idx in this._inventory)})
        };
    }
}