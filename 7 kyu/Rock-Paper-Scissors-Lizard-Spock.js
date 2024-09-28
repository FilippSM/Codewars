/* DESCRIPTION */
/* JIn this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!". */

/* SOLUTION */
function rpsls(pl1, pl2) {
    // Define the win conditions
    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    };

    // Check for a draw
    if (pl1 === pl2) {
        return "Draw!";
    }

    // Determine the winner
    if (rules[pl1].includes(pl2)) {
        return "Player 1 Won!";
    } else {
        return "Player 2 Won!";
    }
}

// Example usage
console.log(rpsls("rock", "scissors")); // Output: "Player 1 Won!"
console.log(rpsls("paper", "rock"));    // Output: "Player 1 Won!"
console.log(rpsls("scissors", "rock")); // Output: "Player 2 Won!"
console.log(rpsls("lizard", "spock"));  // Output: "Player 1 Won!"
console.log(rpsls("spock", "paper"));   // Output: "Player 2 Won!"
console.log(rpsls("rock", "rock"));      // Output: "Draw!"