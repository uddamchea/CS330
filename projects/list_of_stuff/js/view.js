/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

class inventoryView {
    constructor(model) {
        // Connect to the model and redraw the table on change
        model.subscribe(this.redrawTable.bind(this));
    }

    redrawTable(listOfGames, msg) {
        let tblBody = document.querySelector("#tblAllGames > tbody");
        tblBody.innerHTML = "";

        for (let game of listOfGames) {
            let row = document.createElement("tr");
            let tdButtons = document.createElement("td");
            tdButtons.innerText = game.buttons;
            row.appendChild(tdButtons);
            
            let tdTitle = document.createElement("td");
            tdTitle.innerText = game.title;
            row.appendChild(tdTitle);
            
            let tdType = document.createElement("td");
            tdType.innerText = game.type;
            row.appendChild(tdType);

            let tdPrice = document.createElement("td");
            tdPrice.innerText = game.price;
            row.appendChild(tdPrice);

            let tdRefund = document.createElement("td");
            tdRefund.innerText = game.refund;
            row.appendChild(tdRefund);

            let tdHour = document.createElement("td");
            tdHour.innerText = game.hour;
            row.appendChild(tdHour);

            tblBody.appendChild(row);
        }
    }
}