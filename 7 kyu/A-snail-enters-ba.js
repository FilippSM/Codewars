/* DESCRIPTION */
/* Problem Description:

A snail is crawling along a rubber band that has an initial length of x units. The snail moves at a constant speed of y units per minute. As the snail crawls from the left end of the rubber band to the right end, the rubber band increases in length from the right side every minute, adding z units to its length.

Вопрос в том, сможет ли улитка дотянуться до правого конца резиновой ленты внутри?1 year

Parameters:

x: Initial length of the rubber band (in units), where 0.01 ≤ x ≤ 1,000,000.
y: Speed of the snail (in units per minute), where 0.01 ≤ y ≤ 1,000,000.
z: Amount by which the rubber band increases in length every minute (in units), where 0.01 ≤ z ≤ 1,000,000. */

/* SOLUTION */
function canSnailReachEnd(x, y, z) {
    const minOfYerar = 525500;

    let time = 0; // Время в минутах
    let snailPosition = 0; // Положение улитки
    let rubberLength = x; // Длина резинки

    if (y <= z) {
        return false;
    }

    while (snailPosition < rubberLength) {
        time++; // Увеличиваем время на 1 минуту
        snailPosition += y; // Улитка движется на y единиц
        rubberLength += z; // Резинка растет на z единиц
    }

    if (time <= minOfYerar) {
        return true;
    } else { return false; }
}

console.log(canSnailReachEnd(10, 2, 1));
console.log(canSnailReachEnd(100, 10, 5));
console.log(canSnailReachEnd(50, 5, 1));
console.log(canSnailReachEnd(1, 0.1, 0.01));
console.log(canSnailReachEnd(100, 1, 2));
console.log(canSnailReachEnd(100000, 0.1, 0.05));
console.log(canSnailReachEnd(100, 0.5, 1));
console.log(canSnailReachEnd(1000, 1, 2));
console.log(canSnailReachEnd(500, 5, 10));
console.log(canSnailReachEnd(10000, 0.1, 1));
