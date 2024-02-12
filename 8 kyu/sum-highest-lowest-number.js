/* DESCRIPTION
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation. */

// SOLUTION
function sumArray(array) {       
      if (Array.isArray(array) === false) {
          return 0;
      } 
      else {
          array.sort((a, b) => a - b);  
          let summ = 0;

          for (let i = 1; i < array.length-1; i ++) {      
          summ += array[i]; 
      }
          return summ;
      }
  };

  console.log(sumArray(null));
  console.log(sumArray([]))
  console.log(sumArray([ 3 ]))
  console.log(sumArray([ 3, 5 ]))
  console.log(sumArray([ 6, 2, 1, 8, 10 ]));
  console.log(sumArray([ -6, -20, -1, -10, -12 ]))
  console.log(sumArray([ -6, 20, -1, 10, -12 ]))