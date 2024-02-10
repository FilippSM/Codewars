/* DESCRIPTION
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value. */




//SOLUTION
function flickSwitch(arr){
    let a = true;    
        const newArr = arr.map(sweetItem => {
            if (sweetItem !== "flick" && a === true) {
                a = true;
                return sweetItem = true;    
            } else if (sweetItem === "flick" && a === false) {
                a = true;
                return sweetItem = true;  
            } else {
                a = false;
                return sweetItem = false;     
            };
            
        })

    return newArr;
};
 
console.log("flickSwitch: ", flickSwitch(["codewars", "flick", "code", "wars"]));  
console.log("flickSwitch: ", flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
console.log("flickSwitch: ", flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));    
console.log("flickSwitch: ", flickSwitch(["flick", "flick", "flick", "flick", "flick"]));     
console.log("flickSwitch: ", flickSwitch(["john, smith, susan", "flick"]));
console.log("flickSwitch: ", flickSwitch(["bicycle"])); 
console.log("flickSwitch: ", flickSwitch(["flick"]));    
console.log("flickSwitch: ", flickSwitch([]));  