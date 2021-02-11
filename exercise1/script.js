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
    let numberInput = params.get('n')
        for (var i = 2; i < numberInput; i++) {
            if ( number % n === 0) {
                return n > 1;
            }
        }
}

function printPrimeNumber() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const numberInput = urlParams.get('n')||330;
    if (isPrime(n)){
        document.querySelector("#primeInfo").innerText=`${n}  is a prime number`;
    }
    else {
        document.querySelector("#primeInfo").innerText=`${n} is not a prime number`
    }
}

function getNPrimes(n) {
    var primeNumberList = [];
    var k = 2;
    for (var i = 0; i < n; i++){
        while (primeNumberList.length < n){
            if (isPrime(k))primeNumberList.push(k);
            k++;
        }
    }
    return primeNumberList
}

function printNPrimes() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const numberInput = urlParams.get('n')||330;
    let tableHead = document.querySelector("thread");
    tableHead.innerHTML = `The first ${n} primes`;
    for (var item of getNPrimes(n)){
        var tableData = document.querySelector("tableBody");
        var newRow = tableData.insertRow();
    }
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
};
