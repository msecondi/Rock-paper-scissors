function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
        return userInput;
    }
    else {
        console.log("Please type a valid selection (rock, paper or scissors).");
    }
}


function getComputerChoice() {

    var compNumber = Math.floor(Math.random() * 3 );
    if (compNumber == 0) {
        return "rock";
    }
    else if(compNumber == 1) {
        return "paper";
    }
    else if (compNumber == 2) {
        return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return "The game is a tie!";
    }
    else if (userChoice == "rock") {
        if(computerChoice == "paper") {
            return "YOU LOSE --- The computer chose paper!";
        }
        else {
            return "YOU WON --- The computer chose scissors!";
        }
    }
    else if (userChoice == "paper") {
        if(computerChoice == "scissors") {
            return "YOU LOSE --- The computer chose scissors!";
        }
        else {
            return "YOU WON --- The computer chose rock!";
        }
    }
    else if (userChoice == "scissors") {
        if(computerChoice == "rock") {
            return "YOU LOSE --- The computer chose rock!";
        }
        else {
            return "YOU WON --- The computer chose paper!";
        }
    }
    else if (userChoice == "bomb") {
        return "KABOOOM! Very sneaky... you blew up the competition and won!";
    }
}

function playGame() {
    var userChoice = getUserChoice("paper");
    console.log(userChoice);

    var computerChoice = getComputerChoice();
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}


playGame();
