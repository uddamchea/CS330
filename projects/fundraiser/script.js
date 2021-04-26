/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';

function calculate(){
    var denom = document.querySelectorAll(".x")[0].value;
    var qty = document.querySelectorAll(".y")[0].value; 
    document.querySelectorAll(".z")[0].value = denom * qty;
}
