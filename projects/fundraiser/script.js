/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';


function calculateTotalCards(){
    var totalCards = 0;
    $('.qty').each(function(){
        totalCards += Number($(this).val());
    });
    $('.totalCards').val(totalCards)}

var refreshTime;
$(document).ready(function(){
    refreshTime = setInterval("calculateTotalCards()", 500);});

function calculateTotalDue(){
    var totalDue = 0;
    $('.amount').each(function(){
        totalDue += Number($(this).val());
    });
    $('.totalDue').val(totalDue)}

var refreshTime;
$(document).ready(function(){
    refreshTime = setInterval("calculateTotalDue()", 500);});

function calculateDis(){
    ($('.disAmount').val($('.totalDue').val()* 0.01)).toFixed(3);}

var refreshTime;
$(document).ready(function(){
    refreshTime = setInterval("calculateDis()", 500);});
    

    
function calculateAW(){
    var denom = document.getElementById("awInput").value;
    var qty = document.getElementById("awQty").value; 
    document.getElementById("awAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateACE(){
    var denom = document.getElementById("aceInput").value;
    var qty = document.getElementById("aceQty").value; 
    document.getElementById("aceAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateCASEY(){
    var denom = document.getElementById("caseyInput").value;
    var qty = document.getElementById("caseyQty").value; 
    document.getElementById("caseyAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateFARE(){
    var denom = document.getElementById("farewayInput").value;
    var qty = document.getElementById("farewayQty").value; 
    document.getElementById("farewayAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateFISK(){
    var denom = document.getElementById("fiskInput").value;
    var qty = document.getElementById("fiskQty").value; 
    document.getElementById("fiskAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateDOLLAR(){
    var denom = document.getElementById("dollarInput").value;
    var qty = document.getElementById("dollarQty").value; 
    document.getElementById("dollarAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateKWIK(){
    var denom = document.getElementById("kwikInput").value;
    var qty = document.getElementById("kwikQty").value; 
    document.getElementById("kwikAmount").value = parseInt(denom) * parseInt(qty);
}

function calculatePINTERS(){
    var denom = document.getElementById("pintersInput").value;
    var qty = document.getElementById("pintersQty").value; 
    document.getElementById("pintersAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateSUB(){
    var denom = document.getElementById("subwayInput").value;
    var qty = document.getElementById("subwayQty").value; 
    document.getElementById("subwayAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateSUE(){
    var denom = document.getElementById("sueInput").value;
    var qty = document.getElementById("sueQty").value; 
    document.getElementById("sueAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateATOMIC(){
    var denom = document.getElementById("atomicInput").value;
    var qty = document.getElementById("atomicQty").value; 
    document.getElementById("atomicAmount").value = parseInt(denom) * parseInt(qty);
}

function calculateSPECIAL(){
    var denom = document.getElementById("specialInput").value;
    var qty = document.getElementById("specialQty").value; 
    document.getElementById("specialAmount").value = parseInt(denom) * parseInt(qty);
}
