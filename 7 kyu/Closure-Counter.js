/* DESCRIPTION */
/* Closure Counter
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2 */

/* SOLUTION */
function counter() {
    let count = 0; // Initialize the count variable

    return function () {
        count++; // Increment the count
        return count; // Return the current count
    };
}

// Example usage:
const newCounter = counter();
console.log(newCounter()); // Output: 1
console.log(newCounter()); // Output: 2
console.log(newCounter()); // Output: 3