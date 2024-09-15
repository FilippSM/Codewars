/* DESCRIPTION */
/* I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.
Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.
As usual, a few exa */

/* SOLUTION */
function chessboardSquares(grains) {
    if (grains === 0) {
        return 0;
    }

    let totalGrains = 0;
    let squares = 0;

    for (let square = 1; square <= 64; square++) {
        totalGrains += Math.pow(2, square - 1); // 2^(square - 1)
        squares++;

        if (totalGrains >= grains) {
            return squares;
        }
    }

    return "64 squares are not enough"; // Если не хватает 64 квадратов
}

// Примеры использования
console.log(chessboardSquares(0));      // Вывод: 1
console.log(chessboardSquares(1));      // Вывод: 2
console.log(chessboardSquares(2));     // Вывод: 4
console.log(chessboardSquares(3));     // Вывод: 4
console.log(chessboardSquares(4));     // Вывод: 4