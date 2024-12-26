console.log("Hellow World")
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = "";
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            choice = "Rock";
    }
    return choice
}
function getHunmanChoice(){
    let humanChoice = prompt("Choice rock, paper, scissors: ", "").toLocaleLowerCase();
    return humanChoice;
}

function playRound(humanInput, computerInput){
    let result = "";
    switch(humanInput){
        case "rock" :
            if(computerInput == "paper"){
                result = "You Lose! Paper beats Rock";
                computerScore++;
            } else if (computerInput == "rock"){
                result = "It's draw!";
            } else{
                result = "You Won! Rock beats Scissors";
                humanScore++;
            }
            break;
        case "paper":
            if(computerInput == "paper"){
                result = "It's draw!"
            } else if (computerInput == "rock"){
                result = "You Won! Paper beats Rock";
                humanScore++;
            } else{
                result = "You Lose! Scissors beats Paper";
                computerScore++;
            }
            break;
        case "scissors":
            if(computerInput == "paper"){
                result = "You Won! Scissors beats Paper";
                humanScore++;
            } else if (computerInput == "rock"){
                result = "You Lose! Rock beats Scissors";
                computerScore++;
            } else{
                result = "It's draw!";
            }
            break;
        default:
            result = "Invalid input from human";
    }
    console.log(result);
    return result;
}
function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHunmanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert(`you won! you beat the computer ${humanScore} to ${computerScore}`);
    } else {
        alert(`you lose! ${humanScore} to ${computerScore}`);
    }
}
playGame();


