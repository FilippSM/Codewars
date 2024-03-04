/* DESCRIPTION
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */

//SOLUTION
function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            return ("Error");
    }
};

console.log("basicOp: ", basicOp("+", 4, 7));  
console.log("basicOp: ", basicOp("-", 15, 18));   
console.log("basicOp: ", basicOp("*", 5, 5));
console.log("basicOp: ", basicOp("/", 49, 7));   