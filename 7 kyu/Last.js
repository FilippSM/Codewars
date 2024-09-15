/* DESCRIPTION */
/* Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, 
return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty. */

/* SOLUTION */
function last(...args) {
    if (args.length === 1) {
        const singleArg = args[0];
        // Check if the single argument is an array or a string
        if (Array.isArray(singleArg) || typeof singleArg === 'string') {
            return singleArg[singleArg.length - 1]; // Return last element
        }
    }
    return args[args.length - 1]; // Return last argument
}

// Examples
console.log(last(5));                // 5
console.log(last([1, 2, 3, 4]));     // 4
console.log(last("xyz"));            // "z"
console.log(last(1, 2, 3, 4));       // 4
console.log(last([1, 2], [3, 4]));   // [3, 4]
console.log(last([[1, 2], [3, 4]])); // [3, 4]