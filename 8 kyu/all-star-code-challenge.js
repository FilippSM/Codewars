//DESCRIPTION
/* Create a function that accepts a string and a single character, and returns an integer of the count 
of occurrences the 2nd argument is found in the first one. */

//SOLUTION
function strCount(str, letter){  
    let summ = 0;
    for (i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        summ++;  
      }  
    }
    return summ;
  };
  
console.log("strCount: ", strCount('Hello', 'o'));
console.log("strCount: ", strCount('Hello', 'z'));
console.log("strCount: ", strCount('', 'z'));