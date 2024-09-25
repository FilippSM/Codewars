/* DESCRIPTION */
/* If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.*/

/* SOLUTION */
function wordsToMarks(string) {
    const arr = string.split("");

    let acc = 0;
    for (const key in arr) {

        let char = arr[key];
        let number = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

        acc += number
    }

    return acc;
}

console.log(wordsToMarks("attitude")); // Вывод: 100