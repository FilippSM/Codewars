/* DESCRIPTION
Create a method that takes as input a name, city, 
and state to welcome a person. Note that name will be an array consisting 
of one or more values that should be joined together with one space between each, 
and the length of the name array in test cases will vary. */

//SOLUTION
function sayHello(name, city, state) {
    function getName(name) {
        let summ = "";

        for (i = 0; i < name.length; i++) {
            summ += " " + name[i];
        }
        return summ;
    }

    let fullName = getName(name);

    return `Hello,${fullName}! Welcome to ${city}, ${state}!`
};

console.log("sayHello: ", sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
console.log("sayHello: ", sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));