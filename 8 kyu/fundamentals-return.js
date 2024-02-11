/* DESCRIPTION
Make multiple functions that will return the sum, difference, modulus, 
product, quotient, and the exponent respectively. */

//SOLUTION
function add(a,b){
    return a + b;
}

function divide(a,b){
    return a / b; 
}

function multiply(a,b){
    return a * b;
}

function mod(a,b){
    return a%b;
}
   
function exponent(a,b){
    return Math.pow(a, b)
}
    
function subt(a,b){
    return a-b;
}

console.log("add: ", add(1,2));
console.log("multiply: ", multiply(1,2));
console.log("divide: ", divide(2,1));
console.log("mod: ", mod(37, 13));
console.log("exponent: ", exponent(1,2));
console.log("subt: ", subt(1,2));