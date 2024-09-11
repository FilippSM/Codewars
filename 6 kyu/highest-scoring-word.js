//DESCRIPTION
/* Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

//SOLUTION
const getAlphabeticalSum = (str) => {
    return Array.from(str.toLowerCase()).reduce((sum, char) => {
      const code = char.charCodeAt(0);
        return sum + (code - 96); // 'a' (97) - 96 = 1
    }, 0);
  };

// Находим строку с максимальной суммой кодов символов Unicode
const high = (strings) => {
let arr = strings.split(' ');  
  let maxString = '';
  let maxSum = 0;


  arr.forEach(str => {
    const sum = getAlphabeticalSum(str);
    if (sum > maxSum) {
      maxSum = sum;
      console.log(maxSum);
      maxString = str;
    }
  });

  return maxString;
};
  
console.log("high: ", high("man i need a taxi up to ubud"));
console.log("high: ", high("aa b"));
console.log("high: ", high("b aa"));