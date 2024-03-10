/* DESCRIPTION
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether 
the input is a valid number because only valid numbers are used in the tests.
*/

// SOLUTION
function twoDecimalPlaces(n) {
    return +n.toFixed(2);
  };

console.log('twoDecimalPlaces: ', twoDecimalPlaces(4.659725356));