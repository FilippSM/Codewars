/* DESCRIPTION */
/* Implement a function, multiples(m, n), which returns an array of the 
first m multiples of the real number n. Assume that m is a positive integer. */

/* SOLUTION */
function multiples(m, n){
    const arr = []; // Initialize an empty array
  
    for (let i = 1; i <= m; i++) {
      arr.push(n * i); // Calculate and push the multiples
    }
  
    return arr; // Return the array of multiples
  }

console.log(multiples(3, 5)); //false
