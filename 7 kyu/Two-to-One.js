/* DESCRIPTION */
/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. */

/* SOLUTION */
function longest(s1, s2) {
    // Combine both strings
    const combined = s1 + s2;
    
    // Create a set to get distinct letters
    const distinctLetters = new Set(combined);
    
    // Convert the set back to an array and sort it
    const sortedLetters = Array.from(distinctLetters).sort();
    
    // Join the sorted letters into a string
    return sortedLetters.join('');
  }

console.log(longest("aretheyhere", "yestheyarehere"));