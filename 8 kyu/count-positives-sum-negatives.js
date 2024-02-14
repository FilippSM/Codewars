/* DESCRIPTION
Return an array, where the first element is the count 
of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */

// SOLUTION
function countPositivesSumNegatives(array) {
    let newArray = [];
    let countPositives = 0;
    let countSumNegatives = 0;

    if (array === null || array.length === 0) {
        return newArray;
    } else {
        for (i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                countPositives++;
            } 
            else {
                countSumNegatives += array[i];
            }
        };   
    }
    newArray.push(countPositives);
    newArray.push(countSumNegatives);

    return newArray; 
}

console.log("countPositivesSumNegatives: ", countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log("countPositivesSumNegatives: ", countPositivesSumNegatives([]));
console.log("countPositivesSumNegatives: ", countPositivesSumNegatives(null));

