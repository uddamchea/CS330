/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';

var screen;


function enterDigit(digit) {
    let inputDigit = `${digit}`
    if(screen.innerHTML == "0") {
        document.querySelector("#result").innerHTML = inputDigit ;
    }
    else{
        screen.innerHTML= screen.innerHTML + inputDigit
    }
}

function clear_screen() {
    document.querySelector("#result").innerHTML = `${"0"}`
}

function eval_expr() {
    let operators = (screen.innerHTML.match(/\+/g) || []).length;
    if(operators>1){
        screen.innerHTML="ERROR";
    }
    else{
        screen.innerHTML=`${eval(String(screen.innerHTML))}`
    }
}

function enterOp(operation) {
    document.querySelector("#result").append(operation); 
}

window.onload = function () {
    screen = document.querySelector("#result");
    screen.innerHTML = "0";
};