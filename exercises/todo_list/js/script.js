/* jshint esversion: 6 */
/* jshint browser: true */
"use strict;";

var team = ["Aardvark", "Beaver", "Cheetah", "Dolphin", "Elephant", "Flamingo", "Giraffe", "Hippo"];
var priority = ["Low", "Normal", "Important", "Critical"];

function addTask() {
    let vals = [];
    let rowcolids = ["title", "assignedTo", "priority", "dueDate"];

    if (!document.querySelector("#newTask").checkValidity()) {
        let warning = document.createElement("p");
        warning.setAttribute("class", "alert alert-warning");
        warning.innerText = "Please enter all values";
        document.querySelector("body").appendChild(warning);
        return;
    }

    //Implement

    addRow(vals, document.getElementById("taskList"));
}

function addRow(valueList, parent) {
    let row = document.createElement("tr");
    let td = document.createElement("td");
    let cb = document.createElement("input");

    // Implement

    parent.appendChild(row);
}

function removeRow() {
    // https://stackoverflow.com/questions/26512386/remove-current-row-tr-when-checkbox-is-checked
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId);
    for (let item of sList) {
        let anOption = document.createElement("option");
        anOption.setAttribute("value", item);
        anOption.innerHTML = item;
        sel.appendChild(anOption);
    }

    // Implement
}

window.onload = function() {
    populateSelect("assignedTo", team);
    populateSelect("priority", priority);
};