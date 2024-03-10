/* DESCRIPTION
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
*/

// SOLUTION
function contamination(text, char) {
    const newText = char.repeat(text.length);
    return newText;
}

console.log('contamination: ', contamination("abc","z"));