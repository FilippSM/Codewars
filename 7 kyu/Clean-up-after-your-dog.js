/* DESCRIPTION */
/* You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
If you do, return 'Clean', else return 'Cr@p'.
Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

/* SOLUTION */
function crap(x, bags, cap) {
    let totalCrap = 0;
    let dogPresent = false;

    // Iterate through the 2D array
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (x[i][j] === 'D') {
                dogPresent = true; // Dog is present
            } else if (x[i][j] === '@') {
                totalCrap++; // Count the cr@p
            }
        }
    }

    // Check if the dog is present
    if (dogPresent) {
        return 'Dog!!';
    }

    // Calculate total capacity
    const totalCapacity = bags * cap;

    // Check if we can collect all the cr@p
    return totalCapacity >= totalCrap ? 'Clean' : 'Cr@p';
}

// Example usage:
let garden = [
    ['.', '.', 'D'],
    ['@', '@', '@'],
    ['.', '.', '@']
];