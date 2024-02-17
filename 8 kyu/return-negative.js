/* DESCRIPTION
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative? */

// SOLUTION
function makeNegative(num) {
    return num > 0 ? -num : num;
};

console.log("makeNegative: ", makeNegative(1));
console.log("makeNegative: ", makeNegative(-5));
console.log("makeNegative: ", makeNegative(0));