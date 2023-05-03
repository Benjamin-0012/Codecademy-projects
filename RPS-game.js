const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    } else {
        console.log('Error, please type: rock, paper or scissors');
    }
}

console.log(getUserChoice('paper'));

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            case 1:
                return 'paper';
                case 2:
                    return 'scissors';
    }
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'sorry, computer won!';
        } else {
            return 'Congragulations, you won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'sorry, computer won!';
        } else {
            return 'Congragulations, you won!';
        }
}
}