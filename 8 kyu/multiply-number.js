//DESCRIPTION
/* Jack really likes his number five: the trick here is that you have to multiply each number 
by 5 raised to the number of digits of each numbers */

//SOLUTION
function multiply(number){
    const exponentNumber = Math.floor(Math.log10(Math.abs(number)))+1;;
    
    return number * Math.pow(5, exponentNumber);
};

console.log("multiply: ", multiply(10));
console.log("multiply: ", multiply(5));
console.log("multiply: ", multiply(200));
console.log("multiply: ", multiply(0));
console.log("multiply: ", multiply(-2));