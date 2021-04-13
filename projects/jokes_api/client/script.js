/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict'

const BASE_URL = "http://localhost:5000/api/v1/jokes"

async function get_jokes() {
    var category = document.getElementById(selCat).value;
    var language = document.getElementById(selLang).value;
    var number = document.getElementById(selNum).value;
    var id = document.getElementById().value;

    if (id){
    var jokes = await fetch(`${BASE_URL}/${category}/${language}/${number}`)
    .then(response => response.json())
    .catch(error => console.log(error))}

    else{
    var jokes = await fetch(`${BASE_URL}/${category}/${language}/${number}/${id}`)
    .then(response => response.json())
    .catch(error => console.log(error))}
    
    let row = document.querySelector("#jokes")
    for (let index in jokes){
        let td = document.createElement("table");
        td.innerHTML = jokes[index];
        row.appendChild(td);
    }
}

    async function print_jokes() {
        pass
    }