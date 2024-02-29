//DESCRIPTION
/* Given a logarithm base X and two values A and B, 
return a sum of logratihms with the base X: logxA + logxB 
 */

//SOLUTION
function logs(x , a, b){
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
  };
  
console.log("logs: ", logs(10, 2, 3));
console.log("logs: ", logs(5, 2, 3));
console.log("logs: ", logs(1000, 2, 3));