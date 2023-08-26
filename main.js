function getComputerChoice(){
    var choiceArray = ['Rock','Paper','Scissors'];
    computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)]; //choiceArray[x] x = 0,1,2
    //Math.random generates number between 0-1 (inclusive of 0, exclusive of 1)
        // don't need 1 cause only need up to index of 2
    //Math.floor rounds number down to floor.
    return computerChoice
}

console.log(getComputerChoice())