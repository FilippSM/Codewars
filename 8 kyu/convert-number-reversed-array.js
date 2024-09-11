/* DESCRIPTION
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/

// SOLUTION
function digitize(n) {
    let array = Array.from(String(n)).map(i => Number(i)).reverse();

    return array;
}

console.log('digitize: ', digitize(6734234));