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


/* 
function getHumanChoice() {

    let choice = prompt("Enter rock, paper or scissor");
    let result = choice.toLowerCase();

    if (result == "rock" || result == "paper" || result == "scissor") {

        return result;
    }
        

} */

let computerScore = 0;
let humanScore = 0;



function playRound(humanChoice, computerChoice) {

    if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++;
        container.appendChild(document.createTextNode("You lose! Paper loses to Scissor"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        container.appendChild(document.createTextNode("You win! Paper beats Rock"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        container.appendChild(document.createTextNode("Draw!"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "scissor" && computerChoice == "scissor") {
        container.appendChild(document.createTextNode("Draw!"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++;
        container.appendChild(document.createTextNode("You lose! Scissor loses to Rock"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++;
        container.appendChild(document.createTextNode("You win! Scissor beats Paper"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++;
        container.appendChild(document.createTextNode("You win! rock wins against scissor"));
        container.appendChild(document.createElement("br"));
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        container.appendChild(document.createTextNode("Draw!"));
        container.appendChild(document.createElement("br"));
    } else {
        computerScore++;
        container.appendChild(document.createTextNode("You lose! Rock loses to Paper"));
        container.appendChild(document.createElement("br"));
    }

document.querySelector(".humanScore").textContent = humanScore + " " + "Human Score";
document.querySelector(".computerScore").textContent = computerScore + " " + "Computer Score";

if (humanScore == 5) {
    container.insertBefore(humanNode, container.children[0]);
} else if (computerScore == 5) {
    container.insertBefore(computerNode, container.children[0]);
}
}


const humanNode = document.createElement("h1");
humanNode.textContent = "YOU WIN!";
const computerNode = document.createElement("h1");
computerNode.textContent = "COMPUTER WINS!";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const container = document.querySelector(".results");

rock.addEventListener("click", addRock);
paper.addEventListener("click", addPaper);
scissor.addEventListener("click", addScissor);

function addRock() {
    
    playRound("rock", getComputerChoice());
}

function addPaper() {
    
    playRound("paper", getComputerChoice());
}

function addScissor() {
    
    playRound("scissor", getComputerChoice());
}