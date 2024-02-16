//DESCRIPTION
//Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

//SOLUTION
function countSheeps(sheep) {
    let count = 0;
    for (i = 0; i < sheep.length; i++) {
      if (!sheep[i] === false) {
        count++;
      } 
    } 
    return count; 
}
  
console.log("countSheeps: ", countSheeps([undefined]));
console.log("countSheeps: ", countSheeps([null]));
console.log("countSheeps: ", countSheeps([false]));
console.log("countSheeps: ", countSheeps([true]));
console.log("countSheeps: ", countSheeps([undefined,null,false,true]));
console.log("countSheeps: ", countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));