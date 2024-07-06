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

console.log(computerChoice);

