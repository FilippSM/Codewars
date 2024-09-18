/* DESCRIPTION */
/* Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1. */

/* SOLUTION */
function oddOne(arr) {
    let oddIndex = -1; // Initialize to -1 (default if no odd number is found)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { // Check if the number is odd
            if (oddIndex === -1) {
                oddIndex = i; // Store the index of the first odd number found
            } else {
                return -1; // More than one odd number found, return -1
            }
        }
    }

    return oddIndex; // Return the index of the sole odd number, or -1 if none
}

// Example usage:
console.log(oddOne([2, 4, 6, 8, 10, 3])); // Output: 5 (3 is the only odd number)
console.log(oddOne([2, 4, 6, 8, 10]));    // Output: -1 (no odd numbers)
console.log(oddOne([1, 2, 3, 4, 5]));      // Output: -1 (more than one odd number)
console.log(oddOne([-2, -4, -6, -3]));     // Output: 3 (-3 is the only odd number)