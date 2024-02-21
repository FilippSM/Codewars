/* DESCRIPTION
Complete the solution so that it reverses the string passed into it. */

// SOLUTION
function solution(str){
    let reversStr = str.split('').reverse().join('');
    
    return reversStr;
};

console.log("solution: ", solution('world'));
console.log("solution: ", solution('hello'));
console.log("solution: ", solution(''));