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
                winner = "none";
            } else if (playerSelection == "Paper"){
                result = "You Win! Paper beats Rock";
                winner = "player";
            } else if (playerSelection == "Scissors"){
                result = "You Lose! Rock beats Scissors";
                winner = "computer";
            } else {
                result = "Error";
                winner = "none";
            }
            break;
        case "Paper":
            if (playerSelection == "Rock"){
                result = "You Lose! Paper beats Rock";
                winner = "computer";
            } else if (playerSelection == "Paper"){
                result = "Tied";
                winner = "none";
            } else if (playerSelection == "Scissors"){
                result = "You Win! Scissors beat Paper";
                winner = "player";
            } else {
                result = "Error";
                winner = "none";
            }
            break;
        case "Scissors":
            if (playerSelection == "Rock"){
                result = "You Win! Rock beats Scissors";
                winner = "player";
            } else if (playerSelection == "Paper"){
                result = "You Lose! Scissors beat Paper";
                winner = "computer";
            } else if (playerSelection == "Scissors"){
                result = "Tied";
                winner = "none";
            } else {
                result = "Error";
                winner = "none";
            }
            break;
    }
    console.log(result)
    return winner
}

function newgame(){
    const playerSelection = prompt("Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    return winner
}

function game(){
    computerScore = 0;
    playerScore = 0;
    winner = newgame();
    if (winner == "computer"){
        computerScore++;
    } else if (winner == "player"){
        playerScore++;
    } else {
    }
    
    console.log(computerScore);
    console.log(playerScore);
}

game()