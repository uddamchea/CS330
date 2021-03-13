/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

async function get_individual(num, all_numbers) {
    all_numbers.innerHTML="";

    let firstNumber = await fetch(`http://numbersapi.com/${num-1}?json`)
    .then(response => response.json());
    let firstRow=document.createElement("div");
    let firstNumberDiv=document.createElement("div");
    let firstFactDiv=document.createElement("div");
    firstRow.classList.add("row1");
    firstNumberDiv.classList.add("number1");
    firstFactDiv.classList = "alert alert-success"
    firstNumberDiv.innerHTML=firstNumber['number']
    firstFactDiv.classList.add("fact1");
    firstFactDiv.innerHTML=firstNumber.text;
    firstRow.appendChild(firstNumberDiv);
    firstRow.appendChild(firstFactDiv);
    all_numbers.appendChild(firstRow);

    let secondNumber = await fetch(`http://numbersapi.com/${num}?json`)
    .then(response => response.json());
    let secondRow=document.createElement("div");
    let secondNumberDiv=document.createElement("div");
    let secondFactDiv=document.createElement("div");
    secondRow.classList.add("row2");
    secondNumberDiv.classList.add("number2");
    secondFactDiv.classList = "alert alert-success"
    secondNumberDiv.innerHTML=secondNumber['number']
    secondFactDiv.classList.add("fact2");
    secondFactDiv.innerHTML=secondNumber.text;
    secondRow.appendChild(secondNumberDiv);
    secondRow.appendChild(secondFactDiv);
    all_numbers.appendChild(secondRow);

    let thirdNumber = await fetch(`http://numbersapi.com/${num+1}?json`)
    .then(response => response.json());
    let thirdRow=document.createElement("div");
    let thirdNumberDiv=document.createElement("div");
    let thirdFactDiv=document.createElement("div");
    thirdRow.classList.add("row3");
    thirdNumberDiv.classList.add("number3");
    thirdFactDiv.classList = "alert alert-success"
    thirdNumberDiv.innerHTML=thirdNumber['number']
    thirdFactDiv.classList.add("fact3");
    thirdFactDiv.innerHTML=thirdNumber.text;
    thirdRow.appendChild(thirdNumberDiv);
    thirdRow.appendChild(thirdFactDiv);
    all_numbers.appendChild(thirdRow);
}

async function get_batch(num, all_numbers) {
    all_numbers.innerHTML="";
    let res = await fetch(`http://numbersapi.com/${num-1}..${num+1}?json`)
     .then(response => response.json());
    for (let number in res){
        let batchRow=document.createElement("div");
        let batchNum=document.createElement("div");
        let batchFact=document.createElement("div");
        batchRow.classList.add("batchRow");
        batchNum.classList.add("batchNumber");
        batchFact.classList = "alert alert-success"
        batchNum.innerHTML=number;
        batchFact.classList.add("batchFact");
        batchFact.innerHTML=res[number];
        batchRow.appendChild(batchNum);
        batchRow.appendChild(batchFact);
        all_numbers.appendChild(batchRow);
    }
}

async function clickedon() {
    let num = parseInt(document.querySelector('#number').value);
    let all_numbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}