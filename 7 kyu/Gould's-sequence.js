/* DESCRIPTION */
/* Gould's sequencewiki is an infinite integer sequence, named after Henry W. Gouldwiki, that counts how many odd numbers are in each row of Pascal's trianglewiki. It consists only of powers of two*, and begins
1, 2, 2, 4, 2, 4, 4, 8, 2, 4, 4, 8, 4, 8, 8, 16, ..
Note that Gould's sequence is a fractal sequencewiki.
The binary logarithms ( exponents in the powers of two ) of Gould's sequence form an integer sequence
0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, ..
* A companion kata in (a) proof language(s), proving that all elements of Gould's sequence are powers of two, is eagerly awaited, and will be linked here on publication. */

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