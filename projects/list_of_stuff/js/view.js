/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

class inventoryView {
    constructor(model) {
        model.subscribe(this.redrawTable.bind(this));
    }

    redrawTable(listOfGames, msg) {
        let tblBody = document.querySelector("#gameList > tbody");
        tblBody.innerHTML = "";

        for (let game of listOfGames) {
            let row = document.createElement("tr");
            let cb = document.createElement("input");
            cb.setAttribute("type", "checkbox");
            cb.setAttribute('id', 'clear');
            //cb.setAttribute('onclick''removeGame();');
            row.appendChild(cb);
            let tdName = document.createElement("td");
            tdName.innerText = game.name;
            row.appendChild(tdName);
            
            let tdType = document.createElement("td");
            tdType.innerText = game.type;
            row.appendChild(tdType);
            
            let tdPrice = document.createElement("td");
            tdPrice.innerText = game.price;
            row.appendChild(tdPrice);

            let tdContent = document.createElement("td");
            tdContent.innerText = game.content;
            row.appendChild(tdContent);

            let tdStore = document.createElement("td");
            tdStore.innerText = game.store;
            row.appendChild(tdStore);

            let tdHours = document.createElement("td");
            tdHours.innerText = game.hours;
            row.appendChild(tdHours);

            tblBody.appendChild(row);
            //document.querySelector("#gameList").appendChild(tblBody);
        }
    }
}