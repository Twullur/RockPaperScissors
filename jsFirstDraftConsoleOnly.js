
// create empty variables userChoice, computerChoice, userScore, computerScore
let userChoice, computerChoice, userScore, computerScore;

userScore = 0;
computerScore = 0;

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
    // if statement
    // // user --> rock and computer --> paper OR
        // user --> paper and computer --> scissors OR
        // user --> scissors and computer --> rock 
        // then console log YOU LOSE computerChoice beats userChoice
        // computer score ++

    if (
        (userChoice == "ROCK" && computerChoice == "PAPER") ||
        (userChoice == "PAPER" && computerChoice == "SCISSORS") ||
        (userChoice == "SCISSORS" && computerChoice == "ROCK")
    ) {console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        computerScore++;
    }
        // else if
        // user --> rock and computer --> scissors OR
        // user --> scissors and computer --> paper OR
        // user --> paper and computer --> rock 
        // then console log YOU WIN userChoice beats computerChoice
        // user score ++

    else if (
        (userChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (userChoice == "PAPER" && computerChoice == "ROCK") ||
        (userChoice == "SCISSORS" && computerChoice == "PAPER")
    ) {console.log(`You win! ${userChoice} beats ${computerChoice}`);
        userScore++;
}

        // else 
        // user --> rock and computer --> rock OR
        // user --> paper and compuer --> paper OR 
        // user --> scissors and computer --> scissors 
        // then console log TIE
    else console.log("TIE!")



}

// loop getUserChoice, getComputer Choice, and playRound 5 times
    // show userScore and ComputerScore
for (let i = 1; i <= 5; i++) {   
    getUserChoice();
    getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
    playRound(userChoice,computerChoice);
    console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
 }

// if userscore > computerscore, YOU WIN
    // if userScore < computer score, YOU LOSE
    // else say TIE

 if (userScore > computerScore) {
    console.log("Congratulations! You beat the computer!");
 } else if (userScore < computerScore) {
    console.log("You Lose! The computer beat you!");
 } else console.log("It's a Tie!");
 console.log(`FINAL RESULTS>>> Your Score: ${userScore}, Computer Score: ${computerScore}`)

// show userscore and computerscore