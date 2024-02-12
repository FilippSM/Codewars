/* DESCRIPTION
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
If the array does not contain any numbers then you should return 0. */

// SOLUTION
function sum (numbers) {
    "use strict";

    let summ = 0;
    for (let i = 0; i < numbers.length; i ++) {      
        summ += numbers[i]; 
    }
    return summ;  
};

console.log("sum: ", sum([]));
console.log("sum: ", sum([1, 5.2, 4, 0, -1]));
