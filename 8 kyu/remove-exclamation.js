//DESCRIPTION
/* Remove n exclamation marks in the sentence from left to right. n is positive integer. */

//SOLUTION
function remove(s, n) {
    let x = 0;
    for (let i = 0; i < s.length; i++) {
        if (x < n) {
            s = s.replace(/!{1}/, '');
            x += 1;
        }
    }
    return s;
}

console.log("remove: ", remove("Hi!!!"));
console.log("remove: ", remove("!!!Hi !!hi!!! !hi"));
