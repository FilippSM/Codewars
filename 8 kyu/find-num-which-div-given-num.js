/* DESCRIPTION
Complete the function which takes two arguments and returns 
all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor. */

// SOLUTION
const divisibleBy = (arrays, divisor) =>
    arrays.filter(v => v % divisor === 0);  

console.log("divisibleBy: ", divisibleBy([1,2,3,4,5,6], 2));
console.log("divisibleBy: ", divisibleBy([1,2,3,4,5,6], 3));
console.log("divisibleBy: ", divisibleBy([0,1,2,3,4,5,6], 4));