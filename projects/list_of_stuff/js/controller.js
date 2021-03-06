/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

var gameType = ["Adventure", "Action", "FPS", "Hack & Slash", "Horror", "Simulator", "Other"]
var gamePrice = ["< $5", "$5-$10", "$10-$20", "$20-$30", "> $30"]
var gameContent = ["Yes", "No"]
var gameStore = ["Steam", "Epic Games", "EA", "Ubisoft", "Other"];

var myInventoryModel = new gameInventory(20);
var myInventoryView = new inventoryView(myInventoryModel);

function populateSelect(selectElement, options) {
    for (let opt of options) {
        let anOption = document.createElement("option");
        anOption.setAttribute("value", opt);
        anOption.innerHTML = opt;
        selectElement.appendChild(anOption);
    }
}

function addGame(){
    if (!document.querySelector("#newGame").checkValidity()) {
        let warning = document.createElement("p");
        warning.setAttribute("class", "alert alert-warning");
        warning.innerText = "Please enter all values!";
        document.querySelector("body").appendChild(warning);
        return;
    }

    let name = document.querySelector("#gameName").value;
    let type = document.querySelector("#gameType").selectedOptions[0].value;
    let price = document.querySelector("#gamePrice").selectedOptions[0].value;
    let content = document.querySelector("#gameContent").selectedOptions[0].value;
    let store = document.querySelector("#gameStore").selectedOptions[0].value;
    let hours = document.querySelector("#gameHours").value; 

    let newGame = new game(name, type, price, content, store, hours);
    myInventoryModel.add(newGame);
}

function saveGame(){
    let gameInventory = localStorage.getItem("local_inventory");
    gameInventory = gameInventory ? JSON.parse(gameInventory) : [];
    $("#gameList").find('tbody tr').each(function(index,myGame){

    var name = $(myGame).find('td').eq(0).text();
    var type = $(myGame).find('td').eq(1).text();
    var price = $(myGame).find('td').eq(2).text();
    var content = $(myGame).find('td').eq(3).text();
    var store = $(myGame).find('td').eq(4).text();
    var hours = $(myGame).find('td').eq(5).text();
    gameInventory.push(new game(name, type, price, content, store, hours))
    });
    localStorage.setItem("local_inventory", JSON.stringify(gameInventory))
}

function loadGame(){
    let newGameList = localStorage.getItem("local_inventory");
    if (newGameList){
        newGameList = JSON.parse(newGameList);
        let tblBody = document.querySelector("#gameList > tbody");
        tblBody.innerHTML="";

        for (let item of newGameList){
            let row = document.createElement("tr");
            let cb = document.createElement("input");
            cb.setAttribute("type", "checkbox")
            cb.setAttribute('id', 'clear');
            let checker = document.createElement("td")
            checker.appendChild(cb);
            row.appendChild(checker);
            
            for (let object in item){
                let td = document.createElement("td");
                td.innerHTML=item[object];
                row.appendChild(td);
            }
            tblBody.appendChild(row);
            document.getElementById("gameList").appendChild(tblBody)
            
        }

    }
}

function removeGame(){
    $("#gameList input[type='checkbox']:checked").closest("tr").remove();
}


function clearGame(){
    $("#gameList tbody tr").remove();
    localStorage.removeItem("local_inventory");
}
window.onload = function(){
    populateSelect(document.querySelector("#gameType"), gameType); 
    populateSelect(document.querySelector("#gamePrice"), gamePrice);
    populateSelect(document.querySelector("#gameContent"), gameContent);
    populateSelect(document.querySelector("#gameStore"), gameStore);
    loadGame();
}