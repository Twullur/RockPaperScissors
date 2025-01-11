
// create empty variables userChoice, computerChoice, userScore, computerScore
let userChoice, computerChoice, userScore, computerScore;

// getuserchoice = Prompt user for rock, paper, or scissors and store as variable 'userChoice'
function getUserChoice() {
    userChoice = prompt("Type your choice: Rock, Paper, or Scissors");
    userChoice = userChoice.toUpperCase(); // make the choice case insensitive by wrapping it in toUpperCase
}

// function getComputerChoice = generate computer random choice and store as variable 'computerChoice'
function getComputerChoice () {
    let choicePicker = Math.floor(Math.random() * 3 + 1);
    if (choicePicker === 1) {
        computerChoice = "ROCK";
    } else if (choicePicker === 2) {
        computerChoice = "PAPER";
    } else computerChoice = "SCISSORS";
}

// function playRound () to compare the results and decide the winner
function playRound(userChoice,computerChoice) {
    //  

    




    // 
    // switch
        // user --> rock and computer --> paper OR
        // user --> paper and computer --> scissors OR
        // user --> scissors and computer --> rock 
        // then console log YOU LOSE computerChoice beats userChoice
        // computer score ++

        // user --> rock and computer --> scissors OR
        // user --> scissors and computer --> paper OR
        // user --> paper and computer --> rock 
        // then console log YOU WIN userChoice beats computerChoice
        // user score ++

        // user --> rock and computer --> rock OR
        // user --> paper and compuer --> paper OR 
        // user --> scissors and computer --> scissors 
        // then console log TIE

        // show userScore and ComputerScore

}

// loop playRound 5 times
    
// if userscore > computerscore, YOU WIN
    // if userScore < computer score, YOU LOSE
    // else say TIE

// show userscore and computerscore