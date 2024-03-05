/* DESCRIPTION
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number. */

// SOLUTION
function sumMix(x) {
    let summ = 0;

    for (i = 0; i < x.length; i++) {
        summ += Number(x[i]);
    }

    return summ;
};

console.log("sumMix: ", sumMix([9, 3, '7', '3']));
console.log("sumMix: ", sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));