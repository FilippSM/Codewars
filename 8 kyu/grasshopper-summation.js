//DESCRIPTION
/* Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0. 
Your function only needs to return the result, 
what is shown between parentheses in the example below is how you reach that result 
and it's not part of it, see the sample tests. */

//SOLUTION
let summation = function (num) {
    let summ = 0;
    for(i = 0; i < num + 1; i++) {
        summ = i + summ;  
    }
    return summ
};
  
console.log("summation: ", summation(1));
console.log("summation: ", summation(2));
console.log("summation: ", summation(8));