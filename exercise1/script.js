/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

var urlParams = new URLSearchParams(window.location.search);

function greet() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let greetElement = document.querySelector("h1");
    greetElement.innerHTML = `Hello ${urlParams.get('name')||'Student'}`;
}

function isPrime(n) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let numberInput = params.get('n')
        for (var i = 2; i < numberInput; i++) {
            if ( number % n === 0) {
                return false;
            }
        }
}

function printPrimeNumber() {
}

function getNPrimes(n) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let numberInput = params.get('n')
    var arr = [2];
        for (var n = 3; n < numberInput; n+=2) {
            if (isPrime(n)) {
                arr.push(n);
            }
        }
}

function printNPrimes() {
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
};
