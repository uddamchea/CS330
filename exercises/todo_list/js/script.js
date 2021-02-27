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
        warning.innerText = "Please enter all values!";
        document.querySelector("body").appendChild(warning);
        return;
    }

    let title = document.querySelector("#title").value;
    let team = document.querySelector("#assignedTo").selectedOptions[0].value;
    let priority = document.querySelector("#priority").selectedOptions[0].value;
    let dueDate = document.querySelector("#dueDate").value;
    vals.push(title);
    vals.push(team);
    vals.push(priority);
    vals.push(dueDate);

    addRow(vals, document.getElementById("taskList"));
}

function addRow(valueList, parent) {
    let row = document.createElement("tr");
    let cb = document.createElement("input");
    let td = document.createElement("td");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute('id', 'clear');
    cb.setAttribute('onclick', 'removeRow();');
    cb.classList.add('remove');
    let checker = document.createElement("td");
    checker.appendChild(cb);
    row.appendChild(checker);
    for (let value of valueList){
        let td = document.createElement("td");
        td.innerHTML = value;

        if (value=="Low"){
            row.style.backgroundColor="lime";
        }
        else if (value=="Normal"){
            row.style.backgroundColor="aqua";
        }
        else if (value=="Important"){
            row.style.backgroundColor="yellow";
        }
        else if (value=="Critical"){
            row.style.backgroundColor="red";
        }

        row.appendChild(td);
    }

    parent.appendChild(row);
    
}

function removeRow() {
        $("#taskList input[type='checkbox']:checked").closest("tr").remove();
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