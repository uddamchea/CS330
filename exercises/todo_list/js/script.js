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
        warning.innerText = "Enter all values please";
        document.querySelector("body").appendChild(warning);
        return;

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
    $('#btnEClear').on('click', function () {
        $("#tablaNorma input[type='checkbox']:checked:not('.toggleCheckbox')").closest("tr").remove();
    }
}

function populateSelect(selectId, sList) {
    for (let opt of sList) {
        let anOption = document.createElement("option");
        anOption.setAttribute("value", opt);
        anOption.innerHTML = opt;
        selectID.appendChild(anOption);
    }

    // Implement
}

window.onload = function() {
    populateSelect("assignedTo", team);
    populateSelect("priority", priority);
};
