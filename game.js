function getComputerChoice(choices) {

    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];

}

const options = ['Rock', 'Paper', 'Scissor'];
const computerOption = getComputerChoice(options);
console.log(computerOption);

function getHumanChoice(message) {
    
    let userInput = prompt(message);

    return userInput;
}

let name = getHumanChoice("Enter Rock Paper or Scissor:");

console.log(name);