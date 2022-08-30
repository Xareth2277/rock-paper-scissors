
// ==========================================================================
// Game of Rock-Paper-Scissors
// ==========================================================================

// Following is needed:

// - A way for user to choose his "sign"
// - Automated Computer Response
// - A function to compare the outputs
// - Output the outcome
// - A function for running the game with predefined amount of rounds

// ==========================================================================


function capitalizeStr (str) {
    str =   str.charAt(0).toUpperCase() + 
            str.slice(1).toLowerCase();
    return str;
}


function getComputerChoice() {
    
    let choices = [
        "Rock", 
        "Paper", 
        "Scissors"
    ];
    return choices[Math.floor(Math.random() * choices.length)];
}


function getPlayerChoice() {
    
    const choice = capitalizeStr(prompt("Pick rock, paper or scissors: "));
    
    if (
        choice !== "Rock" &&
        choice !== "Paper" &&
        choice !== "Scissors"
    ) {
        throw new Error ("Invalid choice! Please try again.");

    } else {
        return choice;
    }
}


function singleRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        return "draw";

    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        console.log(
            `${playerSelection} beats ${computerSelection}! You've won!`
        );
        return "win";
    
    // Scissors beat ... / not scissors beats ... //
    } else if (
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        console.log(
            `${playerSelection} beat ${computerSelection}! You've won!`
        );
        return "win";

    } else if (
        playerSelection === "Paper" && computerSelection === "Scissors"
    ) {
        console.log(
            `${computerSelection} beat ${playerSelection}! You've lost!`
        );
        return "lose";
    } 
    
    else {
        console.log(
            `${computerSelection} beats ${playerSelection}! You've lost!`
        );
        return "lose";
    }
}


function game() {

    let rounds = 5;
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < rounds; i++) {

        let outcome = singleRound(getPlayerChoice(), getComputerChoice());

        if (outcome === "draw"){
            playerPoints += 1;
            computerPoints += 1;
        } else if (outcome === "win") {
            playerPoints += 1;
        } else {
            computerPoints += 1;
        }
    }

    if (playerPoints > computerPoints) {
        return "You've won the game!";
    
    } else if (playerPoints === computerPoints) {
        return "It's a draw!";
    
    } else {
        return "You've lost the game!";
    }
}


// ==========================================================================


console.log(game());

