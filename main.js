function makeCaseInsensitive(userInput){
    firstLetter= userInput.charAt(0).toUpperCase()
    remainingString= userInput.slice(1,userInput.length).toLowerCase()
    newString = firstLetter + remainingString
    return newString
}

function getComputerChoice(){
    var choiceArray = ['Rock','Paper','Scissors'];
    computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)]; //choiceArray[x] x = 0,1,2
    //Math.random generates number between 0-1 (inclusive of 0, exclusive of 1)
        // don't need 1 cause only need up to index of 2
    //Math.floor rounds number down to floor.
    return computerChoice
}

function playRound(playerSelection, computerSelection){
    //Clean user input
    playerSelection = makeCaseInsensitive(playerSelection);

    //Determine game result
    switch(computerSelection){
        case "Rock":
            if (playerSelection == "Rock"){
                result = "Tied";
            } else if (playerSelection == "Paper"){
                result = "You Win! Paper beats Rock";
            } else if (playerSelection == "Scissors"){
                result = "You Lose! Rock beats Scissors";
            } else {
                result = "Error";
            }
            break;
        case "Paper":
            if (playerSelection == "Rock"){
                result = "You Lose! Paper beats Rock";
            } else if (playerSelection == "Paper"){
                result = "Tied";
            } else if (playerSelection == "Scissors"){
                result = "You Win! Scissors beat Paper";
            } else {
                result = "Error";
            }
            break;
        case "Scissors":
            if (playerSelection == "Rock"){
                result = "You Win! Rock beats Scissors";
            } else if (playerSelection == "Paper"){
                result = "You Lose! Scissors beat Paper";
            } else if (playerSelection == "Scissors"){
                result = "Tied";
            } else {
                result = "Error";
            }
            break;
    }
    return result
}

const playerSelection = "roCk";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));