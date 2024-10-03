/* DESCRIPTION */
/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.*/

/* SOLUTION */
function noOdds(values) {
    let arr = values.filter(num => num % 2 === 0)
    return arr;
  }
  
  
  console.log(noOdds([0, 1, 2, 3]))/*[0,2] */