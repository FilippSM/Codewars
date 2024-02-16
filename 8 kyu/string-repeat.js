/* DESCRIPTION
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times. */

// SOLUTION
function repeatStr (n, s) {
    let new_str = '';
    while (n-- > 0) {
        new_str += s;
    }
    return new_str;
};

console.log("repeatStr: ", repeatStr(3, "*"));
console.log("repeatStr: ", repeatStr(5, "#"));
console.log("repeatStr: ", repeatStr(2, "ha "));