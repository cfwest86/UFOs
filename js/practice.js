// Printing a string with JavaScript
var y = 2;
console.log(y);

// Simple JavaScript console.log (print) statement
function printHello() {
    console.log("Hello there!");
  }

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
 // Converted to an arrow function
addition = (a, b) => a + b;




// run the function 
//  console.log(addition(4, 5));


// Functions can call other functions 
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
//converted to an arrow function
doubleAddition = (c, d) => addition(a, d) * 2;

  console.log(doubleAddition(33,25));



//REFACTORED USING FATG ARROWS

printHello = () => "Hello there!";

//FOR LOOPS

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) { console.log(userList[i]); }

 console.log(listloop(friends));

 // var i = 0  we assign an iterable variable and set its value to zero. 
 // i < userList.length; Here we're basically saying, "while this iterable (i)
 // is still smaller than the total number of iterables in the list (userList), then move on to the next step."
 // The final step, i++, increases the iterable by 1. We're using list comprehension here; 
 // the for loop knows to iterate to the next name because the index number has increased by 1



 for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }


 // The only difference between this loop and the previous one is that we aren't referring to an array. 
 // Instead, we are explicitly telling JavaScript to count up to a fifth value.

