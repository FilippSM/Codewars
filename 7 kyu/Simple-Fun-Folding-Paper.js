/* DESCRIPTION */
/* John was in math class and got bored, so he decided to fold some origami from a rectangular a × b sheet of paper (a > b). His first step is to make a square piece of paper from the initial rectangular piece of paper by folding the sheet along the bisector of the right angle and cutting off the excess part.

Folding
After moving the square piece of paper aside, John wanted to make even more squares! He took the remaining (a-b) × b strip of paper and went on with the process until he was left with a square piece of paper. */

/* SOLUTION */
function countSquares(a, b) {
    let totalSquares = 0;

    while (b > 0) {
        totalSquares += Math.floor(a / b); // Считаем, сколько квадратов b x b можно вырезать
        [a, b] = [b, a % b]; // Обновляем размеры
    }

    return totalSquares;
}

// Пример использования
console.log(countSquares(2, 1));  // Вывод: 2
console.log(countSquares(10, 7));  // Вывод: 6