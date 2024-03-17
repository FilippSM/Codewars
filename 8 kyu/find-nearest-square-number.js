/* DESCRIPTION
Complete the function which takes two arguments and returns 
all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor. */

// SOLUTION
function nearestSq(n) {
    let sqrtDown = Math.floor(Math.sqrt(n));
    let sqrtUp = Math.ceil(Math.sqrt(n));

    if (n - Math.pow(sqrtDown, 2) < Math.pow(sqrtUp, 2) - n) {
        return Math.pow(sqrtDown, 2);
    } else {
        return Math.pow(sqrtUp, 2)
    }
};

console.log("nearestSq: ", nearestSq(10));
console.log("nearestSq: ", nearestSq(111));
console.log("nearestSq: ", nearestSq(9999));

