/* DESCRIPTION
Hello, this is my first Kata so forgive me if it is of poor quality.

In this Kata you should fix/create a program that returns the following values:

false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.
*/

// SOLUTION
function myFirstKata(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return false;
    } else {
        return a % b + b % a;
    }
};

console.log('myFirstKata: ', myFirstKata(3,5));