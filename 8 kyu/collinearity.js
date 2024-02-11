/* DESCRIPTION
Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending 
on whether the vectors are collinear or not. */

//SOLUTION
function collinearity( x1,y1, x2,y2 ) {       
    if (x1/x2 === y1/y2) {
        return true;
    } else if (x1/x2 !== x1/x2 || y1/y2 !== y1/y2){
        return true;
    } else if (Math.abs(x1/x2) === Infinity && Math.abs(y1/y2) === Infinity){
        return true;
    } else {
        return false;
    }
}

console.log("collinearity: ", collinearity(1,1, 1,1));
console.log("collinearity: ", collinearity(1,2, 2,4)); 
console.log("collinearity: ", collinearity(1,2, -1,-2));
console.log("collinearity: ", collinearity(1,1, 6,1));
console.log("collinearity: ", collinearity(1,2, 1,-2));


console.log("collinearity: ", collinearity(4,0, 11,0));
console.log("collinearity: ", collinearity(0,1, 6,0 ));
console.log("collinearity: ", collinearity(4,4, 0,4 ));

console.log("collinearity: ", collinearity(5,7, 0,0));
console.log("collinearity: ", collinearity(-87,10, 0,0));