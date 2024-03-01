//DESCRIPTION
/* Write a function which will return the days in the year and the year entered in a string. 
For example:
yearDays(2000) returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
Also the basic rule for validating a leap year are as follows
Most years that can be divided evenly by 4 are leap years.
Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400. 
 */

//SOLUTION
function yearDays(year){
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            return `${year} has 366 days`;    
        } else if (year % 100 === 0 && year % 400 !== 0) {
            return `${year} has 365 days`;     
        } else {
            return `${year} has 366 days`; 
        }     
    } else {
        return `${year} has 365 days`; 
    } 
};
  
console.log("yearDays: ", yearDays(0));
console.log("yearDays: ", yearDays(-64));
console.log("yearDays: ", yearDays(2024));