/* DESCRIPTION */
/* Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits. */

/* SOLUTION */
function capitalize(s, arr) {
    let charArray = s.split('');
    
    for (let index of arr) {
        if (index >= 0 && index < charArray.length) {
            charArray[index] = charArray[index].toUpperCase();
        }
    }
    
    return charArray.join('');
}

console.log(capitalize("abcdef", [1, 2, 5])); // Output: "aBCdeF"
console.log(capitalize("abcdef", [1, 2, 5, 100])); // Output: "aBCdeF"