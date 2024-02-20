//DESCRIPTION
/* Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).
Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
Make sure to round off the result to two decimal points. */

//SOLUTION
function converter (mpg) {
    let imperialGallon = 4.54609188; //Imperial Gallon = 4.54609188 litres
    let Mile = 1.609344; //Imperial Gallon = 4.54609188 litres

    let kpl = mpg * 1.609344 / 4.54609188;

    return +kpl.toFixed(2);
}

console.log("converter: ", converter(10));
console.log("converter: ", converter(20));
console.log("converter: ", converter(30));