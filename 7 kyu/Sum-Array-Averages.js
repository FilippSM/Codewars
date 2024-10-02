/* DESCRIPTION */
/* Program a function sumAverage(arr) where arr is an array containing arrays full of numbers.

First, determine the average of each array. Then, return the sum of all the averages.

All numbers will be less than 100 and greater than -100.
arr will contain a maximum of 50 arrays.
After calculating all the averages, add them all together, then round down, as shown in the example below:
The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44. */

/* SOLUTION */
const sumAverage = (arr) => {
    // Calculate the sum of averages
    const totalSum = arr.reduce((acc, subArr) => {
        const average = subArr.reduce((sum, num) => sum + num, 0) / subArr.length;
        return acc + average;
    }, 0);

    // Return the rounded down sum of averages
    return Math.floor(totalSum);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])); // Output: 44