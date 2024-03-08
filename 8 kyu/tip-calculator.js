/* DESCRIPTION
Complete the function, which calculates how much you need to tip based on the total 
amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service. */

//SOLUTION
function calculateTip(amount, rating) {
    rating = rating.toLowerCase()

    switch (rating) {
        case "terrible":
            return amount * 0;
        case "poor":
            return Math.ceil(amount * 0.05);
        case "good":
            return Math.ceil(amount * 0.10);
        case "great":
            return Math.ceil(amount * 0.15);
        case "excellent":
            return Math.ceil(amount * 0.20);
        default:
            return "Rating not recognised";
    }
}

console.log("calculateTip: ", calculateTip(20, "Excellent"));
console.log("calculateTip: ", calculateTip(26.95, "good"));