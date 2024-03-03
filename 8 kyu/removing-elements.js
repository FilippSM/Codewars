/* DESCRIPTION
Take an array and remove every second element from the array. Always keep the first 
element and start removing with the next element. */

//SOLUTION
function removeEveryOther(arr){
    for(var i = 0; i < arr.length; i++) {
        arr.splice(i+1, 1);

    }

    return arr;
};

console.log("removeEveryOther: ", removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));  
console.log("removeEveryOther: ", removeEveryOther(["y","b","t","n","n","l","p","v","j","y","g","t","g","c","r"]));  
console.log("removeEveryOther: ", removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  
console.log("removeEveryOther: ", removeEveryOther([[1, 2]]));  
