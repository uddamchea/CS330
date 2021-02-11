/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

var urlParams = new URLSearchParams(window.location.search);

function greet() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let greetElement = document.querySelector("h1");
    greetElement.innerHTML = `Hello ${urlParams.get('name')}`;
}

function isPrime(n) {
}

function printPrimeNumber() {
}

function getNPrimes(n) {
}

function printNPrimes() {
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
};
