/* DESCRIPTION */
/* Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */

/* SOLUTION */
function removeVowels(str) {
    // Используем регулярное выражение для удаления всех гласных
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Примеры использования
console.log(removeVowels("Hello, World!")); // "Hll, Wrld!"
console.log(removeVowels("JavaScript is fun!")); // "JvScrpt s fn!"
console.log(removeVowels("Remove all vowels.")); // "Rmv ll vwls."