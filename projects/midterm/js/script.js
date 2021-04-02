/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';


var allAvailableCharacters = [ 2, 15, 16, 27, 148, 208, 232, 238, 339, 529, 583, 743, 823, 957, 1022, 1052,  1303, 1319];

function populateSelect(selectId, cList) {
    let zx = document.getElementById(selectId)
    for (let contentDrop of cList) {
        let contents = document.createElement("option");
        contents.setAttribute("value", contentDrop);
        contents.innerHTML = contentDrop;
        zx.appendChild(contents);
        }
}

async function get_individual(num,all_numbers) {
    if (num === "") {
        let inputWarning = document.createElement("p");
        inputWarning.setAttribute("class", "alert alert-warning");
        inputWarning.innerText = "Please Choose a Character Number!";
        document.querySelector("body").appendChild(inputWarning);
        setTimeout(function() {
            inputWarning.style.display = "none";
          }, 3000);
        return;
        
    }
    else{
    all_numbers.innerHTML="";
    let numberFirst = await fetch(`https://anapioficeandfire.com/api/characters/${num}`)
    .then(response => response.json());
    //.then(json => console.log(json));
    let row1=document.createElement("div");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    div1.setAttribute("id", "characterNumber");
    div2.setAttribute("id", "fact1aboutCharacter");
    div1.innerHTML= "Character " + num + " is " + numberFirst.name;
    div2.innerHTML=numberFirst.name + " is played by " + numberFirst.playedBy[0] + " in the Game of Thrones Saga.";
    row1.appendChild(div1);
    row1.appendChild(div2);
    all_numbers.appendChild(row1);
    let history0 = localStorage.getItem("local_characters");
    history0 = history0 ? JSON.parse(history0) : [];
    let api0 = {};
    api0 = document.querySelector('#characterNumber').innerHTML;
    history0.push(api0);
    localStorage.setItem("local_characters", JSON.stringify(history0));
    let history = localStorage.getItem("local_characters");
    history = history ? JSON.parse(history) : [];
    let api1 = {};
    api1 = document.querySelector('#fact1aboutCharacter').innerHTML;
    history.push(api1);
    localStorage.setItem("local_characters", JSON.stringify(history));
    

    let numFirst = await fetch(`https://api.celebrityninjas.com/v1/search?name=${numberFirst.playedBy[0]}, {headers: { 'X-Api-Key': '5EeOodib9K+/KSe5/Jq69g==VrfJCyYvBaHrcwG5'}}`)
    .then(response => response.json());
    let rowx=document.createElement("div");
    let divOne=document.createElement("div");
    divOne.setAttribute("id", "fact2aboutCharacter");
    let str1 = JSON.stringify(numFirst[0].birthday);
    var x = JSON.parse(str1);
    var dateFragment =`${x}`.split('-');
    var actorBirthday = new Date(dateFragment[0], dateFragment[1] - 1, dateFragment[2]); 
    var actor_bday = actorBirthday.toDateString();
    divOne.innerHTML=numberFirst.playedBy[0] + " is " + JSON.stringify(numFirst[0].age) + " years old with a networth of about $" + JSON.stringify(numFirst[0].net_worth) + ". " + numberFirst.playedBy[0] + " was born, " + actor_bday +  " and has a height of " + JSON.stringify(numFirst[0].height) + " m ";
    rowx.appendChild(divOne);
    all_numbers.appendChild(rowx);  
    let history2 = localStorage.getItem("local_characters");
    history2 = history2 ? JSON.parse(history2) : [];
    let api2 = {};
    api2 = document.querySelector('#fact2aboutCharacter').innerHTML;
    history2.push(api2);
    localStorage.setItem("local_characters", JSON.stringify(history2));

    let numbFirst = await fetch(`https://v2.jokeapi.dev/joke/Any?type=single&idRange=13-${JSON.stringify(numFirst[0].age)}`)
    .then(response => response.json());
    let rowxxx=document.createElement("div");
    let divOnee=document.createElement("div");
    divOnee.setAttribute("id", "fact3aboutCharacter");
    divOnee.innerHTML = "A joke for someone the same age as " + numberFirst.name + ", " + `${JSON.stringify(numFirst[0].age)}`+ ": " + JSON.stringify(numbFirst.joke);
    rowxxx.appendChild(divOnee);
    all_numbers.appendChild(rowxxx); 
    let history3 = localStorage.getItem("local_characters");
    history3 = history3 ? JSON.parse(history3) : [];
    let api3 = {};
    api3 = document.querySelector('#fact3aboutCharacter').innerHTML;
    history3.push(api3);
    localStorage.setItem("local_characters", JSON.stringify(history3));

    
}
}

function clearCharacters(){
    localStorage.removeItem("local_characters");
    window.location.reload();
}

function loadCharacters(){
   let savedCharacters = localStorage.getItem("local_characters");
   savedCharacters = savedCharacters ? JSON.parse(savedCharacters) : [];
    for (var i = 0; i < savedCharacters.length; i++) {
        var $div = $('<div />').appendTo('body');
        $div.attr('id', 'fact4aboutCharacter');
        $div.append(savedCharacters[i]);
    }
}
    
async function clickedon() {
            let num = document.querySelector('#number').value;
            let all_numbers = document.querySelector('#forclear');
            get_individual(num, all_numbers);
}

window.onload = function() {
    populateSelect("number", allAvailableCharacters);
}