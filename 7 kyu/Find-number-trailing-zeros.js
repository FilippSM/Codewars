/* DESCRIPTION */
/* Given a number n, find the number of trailing zeros in its binary representation.

Examples:
4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101

/* SOLUTION */
function trailingZeros(n) {
    let count = 0;

    // Count how many times n can be divided by 2
    while (n > 0 && (n & 1) === 0) {
        count++;
        n >>= 1; // Divide n by 2 using bitwise right shift
    }

    return count; // Return the count of trailing zeros
}

// Example usage
console.log(trailingZeros(4)); // Output: 2
console.log(trailingZeros(5)); // Output: 0
console.log(trailingZeros(8)); // Output: 3
console.log(trailingZeros(12)); // Output: 2