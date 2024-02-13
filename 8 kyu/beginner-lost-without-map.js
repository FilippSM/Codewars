/* DESCRIPTION
Given an array of integers, return a new array with each value doubled. */

//SOLUTION
function maps(x){
    const newArray = x.map(n => n*2)
  
    return newArray;
  }

console.log("maps: ", maps([1, 2, 3]), [2, 4, 6]);  
console.log("maps: ", maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);  
console.log("maps: ", maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);  
