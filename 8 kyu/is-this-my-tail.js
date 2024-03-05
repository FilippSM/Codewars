/* DESCRIPTION
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals 
do not have the right tails. To help her, you must correct the broken function to make sure that 
the second argument (tail), is the same 
as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters. */

// SOLUTION
function correctTail(bod, tail) {
    const lastLetter = bod[bod.length - 1];

    if (lastLetter === tail) {
        return true
    } else {
        return false
    }
};

console.log("correctTail: ", correctTail("Fox", "x"));
console.log("correctTail: ", correctTail("Rhino", "o"));
console.log("correctTail: ", correctTail("Meerkat", "t"));