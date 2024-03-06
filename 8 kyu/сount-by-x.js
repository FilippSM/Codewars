/* DESCRIPTION
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ). */

//SOLUTION
function countBy(x, n) {
    let array = [];
  
    for (i = 1; i < n + 1; i++) {
      const element = x * i;
      array.push(element); 
    }
  
    return array;
  }

console.log("countBy: ", countBy(1,10));
console.log("countBy: ", countBy(1,10));
