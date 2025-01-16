
// create empty variables userChoice, computerChoice, userScore, computerScore
let userChoice, computerChoice, userScore, computerScore, roundsPlayed;
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

let roundChoices = document.createElement("div");
let roundResult = document.createElement("div");
let scores = document.createElement("div");
let finalStanding = document.createElement("div");

let choices = document.querySelectorAll("#choices > button");
let results = document.querySelector("#results");


choices.forEach((button) => {
    button.addEventListener("click", () => {
        
        userChoice = button.id;
        userChoice = userChoice.toUpperCase(); // make the choice case insensitive by wrapping it in toUpperCase

        getComputerChoice();
        
        roundResult.textContent = "";
        playRound(userChoice,computerChoice);  
        
        scores.textContent = "";
        roundsPlayed++;
        scores.textContent += ` Your Score: ${userScore}, Computer Score: ${computerScore}, Rounds Played: ${roundsPlayed}`;        
        

        if (roundsPlayed === 5) {
            finalResults();
            restartGame(); 
        } else if (roundsPlayed === 1) {
            results.appendChild(finalStanding);
            results.removeChild(finalStanding);
        }     
              
        // console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}, Rounds Played: ${roundsPlayed}`);
    })
})


// function getComputerChoice > generate computer random choice and store as variable 'computerChoice'
function getComputerChoice () {
    let choicePicker = Math.floor(Math.random() * 3 + 1);
    if (choicePicker === 1) {
        computerChoice = "ROCK";
    } else if (choicePicker === 2) {
        computerChoice = "PAPER";
    } else computerChoice = "SCISSORS";
}



// function playRound () to compare the results and show the winner
function playRound(userChoice,computerChoice) { 
    if (
        (userChoice == "ROCK" && computerChoice == "PAPER") ||
        (userChoice == "PAPER" && computerChoice == "SCISSORS") ||
        (userChoice == "SCISSORS" && computerChoice == "ROCK")
    ) {roundResult.textContent=`You lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
    } else if (userChoice === computerChoice) {
        roundResult.textContent = "TIE!"
    } else {
        roundResult.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        userScore++;
    };
    
    roundChoices.textContent=`Your choice: ${userChoice}, the computer's choice: ${computerChoice}`;

    results.appendChild(roundChoices);
    results.appendChild(roundResult);
    results.appendChild(scores)
}

function restartGame () {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}


function finalResults () {
    finalStanding.textContent = "Final Results: "
    if (computerScore === userScore) {
        finalStanding.textContent += "It's a Tie!";
    } else if (computerScore > userScore) {
        finalStanding.textContent += "You Lose! The computer beat you!";
    } else finalStanding.textContent += "You Win! You beat the computer!";
    results.appendChild(finalStanding);
}