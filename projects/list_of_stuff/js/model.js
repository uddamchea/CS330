/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

class game{
    constructor(name, type, price, content, store, hours){
        this._name = name;
        this._type = type;
        this._price = price;
        this._content = content;
        this._store = store;
        this._hours = hours;
    }

    get name(){
        return this._name;
    }
    
    get type(){
        return this._type;
    }

    get price(){
        return this._price;
    }

    get content(){
        return this._content;
    }

    get store(){
        return this._store;
    }

    get hours(){
        return this._hours;
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
        if (this._inventory.length < this._maxSize) {
            this._inventory.push(game);
            this.publish("New game has been removed", this);
        }
    }

    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this._inventory[++idx], done: !(idx in this._inventory)})
        };
    }
}