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
        for (var i = 2; i < n; i++)
            if (n % i === 0) {
                return false;
            }
        return n > 1;
}

function printPrimeNumber() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const n = urlParams.get('n')||330;
    if (isPrime(n)){
        document.querySelector("#primeInfo").innerText=`${n} is a prime number`;
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
            if (isPrime(k)) primeNumberList.push(k);
            k++;
        }
    }
    return primeNumberList
}

function printNPrimes() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const n = urlParams.get('n')||330;
    let tHead = document.querySelector("thead");
    tHead.innerHTML = `The first ${n} primes`;
        for (var item of getNPrimes(n)){
            var tableData = document.querySelector("tBody");
            var newRow = tableData.insertRow();
            newRow.innerText = `${item}`;
            }
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
};
