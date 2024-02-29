//DESCRIPTION
//Complete the function that takes a non-negative integer n as input, 
//and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//SOLUTION
function pillars(numPill, dist, width) {
    return numPill > 2 ? (dist * (numPill - 1)) * 100 + width * (numPill - 2) : (dist * (numPill - 1)) * 100;
};

console.log("pillars: ", pillars(1, 10, 10));
console.log("pillars: ", pillars(2, 20, 25));
console.log("pillars: ", pillars(11, 15, 30));