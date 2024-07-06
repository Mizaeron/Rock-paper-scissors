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

const computerChoice = getComputerChoice();

function getHumanChoice() {

    let choice = prompt("Enter rock, paper or scissor");

    if (choice == "rock" || choice == "paper" || choice == "scissor") {
        return choice;
    } else {
        throw new Error("Value can only be rock, paper or scissor");
    }
}

const humanChoice = getHumanChoice();

console.log(humanChoice);