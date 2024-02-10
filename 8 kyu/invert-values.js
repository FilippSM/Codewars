/* DESCRIPTION
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives. */

//SOLUTION
function invert(array) {
    const newArray = array.map(n => n > 0 ? -n : -n)

    return newArray;
};

console.log("invert: ", invert([1,2,3,4,5]));  
console.log("invert: ", invert([1,-2,3,-4,5]));  
console.log("invert: ", invert([]));  
console.log("invert: ", invert([0]));  