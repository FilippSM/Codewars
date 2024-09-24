/* DESCRIPTION */
/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

/* SOLUTION */
function getCount(str) {
    const vowels = 'aeiou'; // Define the vowels
    let count = 0; // Initialize a counter

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++; // Increment the counter if it's a vowel
        }
    }

    return count; // Return the final count
}

// Example usage
console.log(getCount("hello world")); // Output: 3
console.log(getCount("aeiou")); // Output: 5
console.log(getCount("")); // Output: 0
console.log(getCount("bcdfgh")); // Output: 0