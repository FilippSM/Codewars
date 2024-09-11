//DESCRIPTION
/* Given a string, you have to return a string 
in which each character (case-sensitive) is repeated once. */

//SOLUTION
function doubleChar(str) {
    return ''.concat(...Array.from(str, n => n.repeat(2)))
};

cconsole.log("ldoubleChar: ", doubleChar("abcd")); 