function getComputerChoice(choices) {

    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];

}

const options = ['Rock', 'Paper', 'Scissor'];
const computerOption = getComputerChoice(options);
console.log(computerOption);