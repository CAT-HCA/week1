// Description: Buy more/save more bonus
//Author: Corinne Trudeau
"use strict";

var dollarsSpent = 232.47; //User input
var taxPercent = .08;
var subtotal;
var totalDue;



if (dollarsSpent<100)
{
    subtotal=dollarsSpent;
}
else if (dollarsSpent<250)
{
    subtotal=dollarsSpent*.9;
}
else
{
    subtotal=dollarsSpent*.8;
}

totalDue = subtotal + subtotal*taxPercent

console.log("If you spend $" + dollarsSpent + ", you will pay a total of $" + totalDue)