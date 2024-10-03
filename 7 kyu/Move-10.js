/* DESCRIPTION */
/* Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.*/

/* SOLUTION */
function moveTen(s) {
    // Convert each character in the string
    return s.split('').map(char => {
        // Check if the character is a lowercase letter
        if (char >= 'a' && char <= 'z') {
            // Calculate the new character with wrapping
            return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + 10) % 26 + 'a'.charCodeAt(0));
        }
        // Check if the character is an uppercase letter
        else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + 10) % 26 + 'A'.charCodeAt(0));
        }
        // If it's not a letter, return the character as is
        return char;
    }).join('');
}

// Example usage:
console.log(moveTen("hello")); // Output: "rovvy"
console.log(moveTen("xyz"));   // Output: "jkl"
console.log(moveTen("ABC"));   // Output: "KL"