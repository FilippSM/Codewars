/* DESCRIPTION */
/* With one argument, every(array) returns every element of the array.

With two arguments, every(array, interval) it returns every intervalth element.

With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.

/* SOLUTION */
function every(arr, interval = 1, start_index = 0) {
    // Validate the start_index
    if (start_index < 0 || start_index >= arr.length) {
        return []; // Return an empty array if the start index is out of bounds
    }

    const result = [];

    for (let i = start_index; i < arr.length; i += interval) {
        result.push(arr[i]); // Push every nth element to the result array
    }

    return result; // Return the resulting array
}

// Example usages:
console.log(every([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(every([1, 2, 3, 4, 5], 2)); // Output: [1, 3, 5]
console.log(every([1, 2, 3, 4, 5], 2, 1)); // Output: [2, 4]
console.log(every([1, 2, 3, 4, 5], 3, 1)); // Output: [2, 5]
console.log(every([1, 2, 3, 4, 5], 1, 5)); // Output: [] (out of bounds)