
// ==============================================================
// Game of Rock-Paper-Scissors
// ==============================================================

// Following is needed:

// - A way for user to choose his "sign"
// - Automated Computer Response
// - A function to compare the outputs
// - Output the outcome

// ==============================================================


function getComputerChoice() {
    
    let choices = [
        "Rock", 
        "Paper", 
        "Scissors"
    ];

    return choices[Math.floor(Math.random() * choices.length)];
}

