/* DESCRIPTION */
/* Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password. */

/* SOLUTION */
function validatePassword(password) {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Regular expressions to check for at least one uppercase letter, one lowercase letter, and one number
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    // Return true if all conditions are met
    return hasUppercase && hasLowercase && hasNumber;
}

// Example usage:
console.log(validatePassword("Password123")); // true
console.log(validatePassword("password123")); // false (no uppercase letter)
console.log(validatePassword("PASSWORD123")); // false (no lowercase letter)
console.log(validatePassword("Password"));    // false (no number)
console.log(validatePassword("Pass1"));       // false (too short)
console.log(validatePassword("P@ssw0rd!"));    // true