function getComputerChoice() {

    let option;

    const randomIndex = Math.floor(Math.random() * 3);

    if (randomIndex == 0) {
        option = "rock";
    } else if (randomIndex == 1) {
        option = "paper";
    } else {
        option = "scissor";
    }

    return option;

}



function getHumanChoice() {

    let choice = prompt("Enter rock, paper or scissor");
    let result = choice.toLowerCase();

    if (result == "rock" || result == "paper" || result == "scissor") {

        return result;
    }
        

}


function playGame() {

computerScore = 0;
humanScore = 0;

function playRound(humanChoice, computerChoice) {


    if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++;
        console.log("You lose! Paper loses to Scissor");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw!");
    } else if (humanChoice == "scissor" && computerChoice == "scissor") {
        console.log("Draw!");
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! Scissor loses to Rock");
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++;
        console.log("You win! Scissor beats Paper");
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++;
        console.log("You win! rock wins against scissor");
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw!");
    } else {
        computerScore++;
        console.log("You lose! Rock loses to Paper");
    }
    
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

console.log(humanScore);
console.log(computerScore);

}

playGame();


