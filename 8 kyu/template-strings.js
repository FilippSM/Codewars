/* DESCRIPTION
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '``` */

//SOLUTION
var templateStrings = function (noun, adjective) {
    return `${noun} are ${adjective}`;
}

console.log("templateStrings: ", templateStrings('Animals', 'Good'));