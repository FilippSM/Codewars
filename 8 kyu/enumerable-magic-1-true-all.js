//DESCRIPTION
/* Task
Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. 
Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
 */

//SOLUTION
function all(arr, fun) {
    let result;

    if (arr.length === 0) {
        result = true;
    }
    for (i = 0; i < arr.length; i++) {
        if (fun(arr[i]) === true) {
            result = true;
        } else {
            result = false;
            break
        }
    }

    return result;
};
  
console.log("all: ", all([1,2,3,4,5], function(v){return v<9}));
console.log("all: ", all([1,2,3,4,5, 10], function(v){return v<9}));
console.log("all: ", all([], function(v){return v<9}));