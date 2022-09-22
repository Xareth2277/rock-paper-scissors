
// ==========================================================================
// Game of Rock-Paper-Scissors
// ==========================================================================

// Following is needed:

// - Graphical User Interface
// - A way for user to choose his "sign"
// - Automated Computer Response
// - A function to compare the outputs
// - Output the outcome
// - A function for running the game 

// ==========================================================================


function getComputerChoice() {
    
    let choices = [
        "Rock", 
        "Paper", 
        "Scissors"
    ];
    return choices[Math.floor(Math.random() * choices.length)];
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


function game(e) {

    let outcome = singleRound(
        (e.target.id), 
        getComputerChoice()
    );

    if (outcome === "draw"){
        playerPoints += 1;
        computerPoints += 1;
    } else if (outcome === "win") {
        playerPoints += 1;
    } else {
        computerPoints += 1;
    }

    console.log(playerPoints);
    console.log(computerPoints);

    if (playerPoints === 5 || computerPoints === 5){
    
        if (playerPoints > computerPoints) {
            console.log("You've won the game!");
        
        } else if (playerPoints === computerPoints) {
            console.log("It's a draw!");
        
        } else {
            console.log("You've lost the game!");
        }
    }
}

let playerPoints = 0;
let computerPoints = 0;


// ==========================================================================


const buttons = document.querySelectorAll('button');

buttons.forEach((button => {
    button.addEventListener('click', game);
}));


