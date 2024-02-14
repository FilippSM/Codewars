//DESCRIPTION
//Given a non-empty array of integers, return the result of multiplying the values together in order.

//SOLUTION
function grow(arr){
    let multiplication = 1;
    for (i = 0; i < arr.length; i++) { 
      multiplication *= arr[i];      
    } 
    return multiplication; 
  }
  
  console.log("grow: ", grow([1, 2, 3]));
  console.log("grow: ", grow([4, 1, 1, 1, 4]));
  console.log("grow: ", grow([2, 2, 2, 2, 2, 2]));