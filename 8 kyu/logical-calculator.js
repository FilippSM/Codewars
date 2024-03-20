//DESCRIPTION
/* Given an array of Boolean values and a logical operator, return a Boolean result 
based on sequentially applying the operator to the values in the array. */

//SOLUTION
function logicalCalc(array, op) {
    let summ = array[0];

    for (i = 0; i < array.length - 1; i++) {
        if (op === "AND") {
            summ = summ && array[i + 1];
        } else if (op === "OR") {
            summ = summ || array[i + 1];
        } else if (op === "XOR") {
            summ = summ != array[i + 1];
        }
    }

    return summ;
}

console.log(logicalCalc([true, true, true, false], "AND"))//false
console.log(logicalCalc([true, true, true, false], "OR")) //true
console.log(logicalCalc([true, true, true, false], "XOR")) //true

console.log(logicalCalc([true, true, false, false], "AND"))//false
console.log(logicalCalc([true, true, false, false], "OR"))//true
console.log(logicalCalc([true, true, false, false], "XOR"))//false

console.log(logicalCalc([true, false, false, false], "AND"))//false
console.log(logicalCalc([true, false, false, false], "OR"))//true
console.log(logicalCalc([true, false, false, false], "XOR"))//true