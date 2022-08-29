
// ==========================================================================
// Game of Rock-Paper-Scissors
// ==========================================================================

// Following is needed:

// - A way for user to choose his "sign"
// - Automated Computer Response
// - A function to compare the outputs
// - Output the outcome

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
    
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    

    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        return `${playerSelection} beats ${computerSelection}! You've won!`;
    
    
    // Scissors beat ... / not scissors beats ... //
    } else if (
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        return `${playerSelection} beat ${computerSelection}! You've won!`;

    } else if (
        playerSelection === "Paper" && computerSelection === "Scissors"
    ) {
        return `${computerSelection} beat ${playerSelection}! You've lost!`
    } 
    
    
    else {
        return `${computerSelection} beats ${playerSelection}! You've lost!`
    }
}


// ==========================================================================


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


console.log(singleRound(playerSelection, computerSelection));