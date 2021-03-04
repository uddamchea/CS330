/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

var gameTitle = ["AAA", "AA"];
var gameType = ["Adventure", "Action", "FPS", "Simulator", "Other"]
var gamePrice = ["<$5", "$5-$10", "$10-$20", "$20-$30", ">$30"]

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId);
    for (let item of sList) {
        let anOption = document.createElement("option");
        anOption.setAttribute("value", item);
        anOption.innerHTML = item;
        sel.appendChild(anOption);
    }
}

function addGame(){
    //console.log("Game added!")
    let inventory = localStorage.getItem("local_inventory");
    inventory = inventory ? JSON.parse(inventory) : [];
    let selGames = ["name", "title", "type", "price", "refund", "hour"];
    let newGame = {};
    for (let i of selGames) {
        newGame[i] = document.querySelector(`#sel_${i}`).value;
    }
    inventory.push(newGame);
    localStorage.setItem("local_inventory", JSON.stringify(inventory));
    loadGame();
}

function loadGame(){
    //console.log("Game loaded!")
    let inventory = localStorage.getItem("local_inventory");
    inventory = inventory ? JSON.parse(inventory) : [];
    let inventoryDiv = document.querySelector("#inventory");
    inventoryDiv.innerHTML = "";

    for (let game of inventory) {
        let gameAlert = document.createElement("div");
        gameAlert.classList = "alert alert-warning";
        gameAlert.innerHTML = `${game.name} ${game.title} (${game.type}) (${game.price}) (${game.refund}) (${game.hour})`;
        garageDiv.appendChild(gameAlert);
    }
}

function removeGame(){
    console.log("Game removed!")
}

function clearGame(){
    console.log("All games cleared!")
    localStorage.removeItem("local_inventory");
}