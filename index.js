let points = 0;
let result = 0;
function playRound(playerSelection, computerSelection){ 
    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        ++points;
        return "You Lose! Paper beats Rock " ;    
   } else if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        ++points;
        return "You lost! Scissors cuts Paper ";
   } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        ++points;
        return "You Lose! Rock crushes Scissors ";
   } else if(playerSelection == computerSelection){
        return "It's a tie! Try again ";
   } else if(!(playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors')){
        return "Type your response correctly!"
   }else {
        ++result;
        return "You win! "
   } 
}
function score(points, result){
    let score = 0;
    return "Player Score: "+result+" COM Score: "+points
}
function getComputerChoice(){
    const optionsArray = ['Rock',  'Paper',  'Scissors'];
    return optionsArray[Math.floor(Math.random()*optionsArray.length)]
}
function game(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice()
        let playerSelection = prompt("You VS the COM, best of 5 wins!!", "");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        console.log("P1: "+playerSelection+ " VS COM: "+computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(score(points, result))
        if(!(playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors')){
        --i;
        }else if(result == 3 && 3 >= i){
           return console.log('You must be hacking!!')
        }else if(points == 3 && 3 >= i){
            return console.log('Wow you suck!!')
        }
    }
    if(points < result){
        console.log('You are the winner!!!!!!')
    }else if(points > result){
    console.log('You Lost! Try again!!!!!!')
    }else if (result == 0 || points == 0){
        alert('Enter Rock, Paper, or Scissors to play.')
    }else{console.log('It\'s a tie!!!!')}
}
console.log(game())