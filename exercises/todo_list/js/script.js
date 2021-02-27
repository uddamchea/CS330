/* jshint esversion: 6 */
/* jshint browser: true */
"use strict;";

var team = ["Aardvark", "Beaver", "Cheetah", "Dolphin", "Elephant", "Flamingo", "Giraffe", "Hippo"];
var priority = ["Low", "Normal", "Important", "Critical"];

function addTask() {
    let vals = [];
    let rowcolids = ["title", "assignedTo", "priority", "dueDate"];

    //Implement
    if (!document.querySelector("#newTask").checkValidity()) {
        let warning = document.createElement("p");
        warning.setAttribute("class", "alert alert-warning");
        warning.innerText = "Please enter all values!";
        document.querySelector("body").appendChild(warning);
        return;
    }

    let title = document.querySelector("#title").value;
    vals.push(title);
    let team = document.querySelector("#assignedTo").selectedOptions[0].value;
    vals.push(team);
    let priority = document.querySelector("#priority").selectedOptions[0].value;
    vals.push(priority);
    let dueDate = document.querySelector("#dueDate").value;
    vals.push(dueDate);

    addRow(vals, document.getElementById("taskList"));
}

function addRow(valueList, parent) {
    let row = document.createElement("tr");
    let cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("id", "eliminate");
    cb.onclick = removeRow();
    let checker = document.createElement("td");
    checker.appendChild(cb);
    row.appendChild(checker);
    for (let value of valueList){
        let td = document.createElement("td");
        td.document.createElement("td");
        td.innerHTML = value;
        row.appendChild(td);
    }

    parent.appendChild(row);
}

function removeRow() {
    // https://stackoverflow.com/questions/26512386/remove-current-row-tr-when-checkbox-is-checked
    $('#btnEliminar').on('click', function () {
        $("#tablaNorma input[type='checkbox']:checked").closest("tr").remove();
    });
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