/* DESCRIPTION
Let's play! You have to return which player won! In case of a draw return Draw!. */

// SOLUTION
const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!";
    } else if (p1 === "scissors" || p2 === "scissors") {
        if (p1 === "paper" || p2 === "paper") {
            return p1 === "paper" ? "Player 2 won!" : "Player 1 won!";    
        } else if (p1 === "rock" || p2 === "rock") {
            return p1 === "rock" ? "Player 1 won!" : "Player 2 won!";    
        } 
    } else {
        return p1 === "paper" ? "Player 1 won!" : "Player 2 won!";     
    }
}

console.log("rps: ", rps('rock', 'rock'));
console.log("rps: ", rps('scissors', 'scissors'));
console.log("rps: ", rps('paper', 'paper'));
console.log("rps: ", rps('rock', 'scissors'));
console.log("rps: ", rps('scissors', 'scissors'));
console.log("rps: ", rps('rock', 'paper'));