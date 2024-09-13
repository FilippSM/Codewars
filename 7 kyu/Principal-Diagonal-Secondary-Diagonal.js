/* DESCRIPTION */
/* Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.
Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West. 
If the principal diagonal is larger, return "Principal Diagonal win!"
If the secondary diagonal is larger, return "Secondary Diagonal win!"
If they are equal, return "Draw!"
*/

/* SOLUTION */
function diagonal(matrix) {
    let principalDiagonalcount = 0;
    let secondaryDiagonalcount = 0;

    for (let i = 0; i < matrix.length; i++) {
        principalDiagonalcount += matrix[i][i];
        secondaryDiagonalcount += matrix[i][(matrix.length - 1) - i];
    }

    if (principalDiagonalcount > secondaryDiagonalcount) {
        return "Principal Diagonal win!";
    } else if (principalDiagonalcount < secondaryDiagonalcount) {
        return "Secondary Diagonal win!";
    } else {
        return "Draw!";
    }
}


console.log(diagonal(
    [[2, 2, 2],
    [4, 2, 6],
    [1, 8, 2]]
))
console.log(diagonal(
    [[1, 2, 2, 5, 1],
    [4, 2, 6, 1, 1],
    [1, 8, 3, 6, 2],
    [1, 5, 2, 4, 2],
    [1, 8, 2, 6, 5]]
))
