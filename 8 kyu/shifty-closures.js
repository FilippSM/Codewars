/* DESCRIPTION
Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe? */

// SOLUTION
let name = 'Abe'

const greetAbe = () => 'Hello, ' + name + '!'

let nameBen = 'Ben'

const greetBen = () => 'Hello, ' + nameBen + '!'

console.log("greetAb: ", greetAbe());
console.log("greetBen: ", greetBen());
