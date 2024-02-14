//DESCRIPTION
//Complete the function that takes a non-negative integer n as input, 
//and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//SOLUTION
function powersOfTwo(n){
    let arr = []
    for (i = 0; i < n + 1; i++) {
      let exponent = Math.pow(2, i);
      arr.push(exponent);      
    } 
    return arr; 
  };
  
  console.log("powersOfTwo: ", powersOfTwo(0));
  console.log("powersOfTwo: ", powersOfTwo(1));
  console.log("powersOfTwo: ", powersOfTwo(4));