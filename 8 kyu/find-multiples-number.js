//DESCRIPTION
//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
//If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
//The limit will always be higher than the base.

//SOLUTION
function findMultiples(integer, limit){
    let arr = []
    for (i = 1; i < limit + 1; i++) {
      if (i % integer === 0) {
        arr.push(i);    
      } 
    } 
    return arr; 
  };
  
  console.log("findMultiples: ", findMultiples(5, 25));
  console.log("findMultiples: ", findMultiples(1, 2));
  console.log("findMultiples: ", findMultiples(5, 7));
  console.log("findMultiples: ", findMultiples(11, 54));