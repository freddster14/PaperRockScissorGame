const currentResult = document.getElementById('result');
const currentPoints = document.getElementById('points');
const outcome = document.querySelector('.textResult');

const player = document.querySelector('.buttons');
player.addEventListener('click', e => {playRound(); displayImg()});


const rockButton = document.querySelector('#rock');
rockButton.addEventListener("click", (e) => choose = 'Rock');

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', (e) => choose = 'Paper');

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener("click", (e) => choose = 'Scissors');

let points = 0;
let playerPoints = 0;
let choose = '';

function playRound(playerSelection, computerSelection){ 
    const computerChoice = getComputerChoice();
    const playerChoice = choose;
    if(playerChoice == 'Rock' && computerChoice == 'Paper') {
        currentPoints.textContent = ++points;
        outcome.textContent = "You lose!" ;    
   } else if(playerChoice == 'Paper' && computerChoice == 'Scissors'){
        currentPoints.textContent = ++points;
        outcome.textContent = "You lose!";
   } else if (playerChoice == 'Scissors' && computerChoice == 'Rock'){
        currentPoints.textContent = ++points;
        outcome.textContent = "You lose!";
   } else if(playerChoice == computerChoice){
        currentPoints.textContent = ++points;
        currentResult.textContent = ++playerPoints
        outcome.textContent = "It's a tie!";
   } else if(!(playerChoice == 'Rock' || playerChoice == 'Paper' || playerChoice == 'Scissors')){
        outcome.textContent = "ERROR"
   }else {
        currentResult.textContent = ++playerPoints
        outcome.textContent = "You win!"
   } 
}
const playerOutcome = document.querySelector('#playerOption')

const computerOutcome = document.querySelector('#computerOption')
function displayImg(){
    if(choose == 'Rock'){
        let img = document.createElement('img');
        img.src = "images/rock.png";
        img.id = "rock"
        playerOutcome.appendChild(img)
    }else if(choose == 'Paper'){
        let img = document.createElement('img');
        img.src = "images/paper.png";
        img.id = "paper"
        playerOutcome.appendChild(img)
    }else{
        let img = document.createElement('img');
        img.src = "images/scissors.png";
        img.id = "scissors"
        playerOutcome.appendChild(img)
    }
}
function getComputerChoice(){
    const optionsArray = ['Rock',  'Paper',  'Scissors'];
    return optionsArray[Math.floor(Math.random()*optionsArray.length)]
}


function game(){
    if(points === 5){
        return "You lost against a Bot...that\'s sad."
    }else{}
}