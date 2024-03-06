/* DESCRIPTION
Write a function that returns the total surface area 
and volume of a box as an array: [area, volume] */

//SOLUTION
function getSize(width, height, depth) {
    const area = 2 * (width * depth + width * height + depth * height);
    const volume = width * height * depth;
    const data = [area, volume];

    return data;
};

console.log("getSize: ", getSize(4, 2, 6));