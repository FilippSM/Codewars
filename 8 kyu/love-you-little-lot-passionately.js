/* DESCRIPTION
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for 
a flower of a given number of petals. The number of petals is always greater than 0. */

//SOLUTION
function howMuchILoveYou(nbPetals) {
    arr = ["I love you", "a little", "a lot", "passionately", "madly","not at all"];  
    //return arr[nbPetals-1];    
    for (i = 0; i < arr.length; i++) {
        if (nbPetals < 7) {
            return arr[nbPetals-1]   
        } else {
            nbPetals = nbPetals-(Math.floor((nbPetals-1)/6))*6;
            return arr[nbPetals-1];   
        } 
    };  
};

console.log("howMuchILoveYou: ", howMuchILoveYou(7)); 
console.log("howMuchILoveYou: ", howMuchILoveYou(3)); 
console.log("howMuchILoveYou: ", howMuchILoveYou(6)); 
console.log("howMuchILoveYou: ", howMuchILoveYou(13));
console.log("howMuchILoveYou: ", howMuchILoveYou(156)); 