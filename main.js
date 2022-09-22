const currentResult = document.getElementById('result');
const currentPoints = document.getElementById('points');
const outcome = document.querySelector('.textResult');
const title = document.querySelector('.header');
const body = document.querySelector('.page')

const restart = document.querySelector('.resetBtn')
restart.addEventListener('click', (e) => location.reload())

const player = document.querySelector('.buttons');
player.addEventListener('click', e => {playRound(); game(); displayImg(); removeBest()});

const rockButton = document.querySelector('#rock');
rockButton.addEventListener("click", (e) => choose = 'Rock');

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', (e) => choose = 'Paper');

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener("click", (e) => choose = 'Scissors');

let points = 0;
let playerPoints = 0;
let choose = '';
let text = '';
function getComputerChoice(text){
    const optionsArray = ['Rock',  'Paper',  'Scissors'];
    return optionsArray[Math.floor(Math.random()*optionsArray.length)]
}
console.log(text)
function hideBody(){
    let gameContainer = document.querySelector('.gameContainer');
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    gameContainer.style.display = 'none';
}
function playRound(){ 
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

const info5 = document.querySelector(".info");
function removeBest(){
    info5.textContent = "";
}
const computerOutcome = document.querySelector('#computerOption')
function displayComImg(){
    if('Rock'){
        let img = document.createElement('img');
        img.src = "images/rock.png";
        img.id = "rock"
        playerOutcome.appendChild(img)
    }else if('Paper'){
        let img = document.createElement('img');
        img.src = "images/paper.png";
        img.id = "paper"
        playerOutcome.appendChild(img)
    }else if ('Scissors'){
        let img = document.createElement('img');
        img.src = "images/scissors.png";
        img.id = "scissors"
        playerOutcome.appendChild(img)
    }
}
const playerOutcome = document.querySelector('#playerOption')
function displayImg(){
    if(choose == 'Rock'){
        let img = document.createElement('img');
        img.src = "images/rock.png"; 
        img.id = "rock";
        playerOutcome.appendChild(img)
    }else if(choose == 'Paper'){
        let img = document.createElement('img');
        img.src = "images/paper.png"; 
        img.id = "paper"; 
        playerOutcome.appendChild(img)
    }else if(choose == 'Scissors'){
        let img = document.createElement('img');
        img.src = "images/scissors.png"; 
        img.id = "scissors";
        playerOutcome.appendChild(img)
    }
}

function game(){
    if(points === 5 && playerPoints === 5){
        hideBody();
        const score = document.createElement('div');
        score.id = "scoreEnd";
        const comScore = document.createElement('div');
        comScore.id = "comScoreEnd";
        score.textContent = `Player: ${playerPoints}`;
        comScore.textContent = `Bot: ${points}`;
        const endDiv = document.createElement('div');
        endDiv.id = "end";
        endDiv.textContent = "It's a draw! Try again.";
        const startOver = document.createElement('button');
        startOver.addEventListener('click', (e) => location.reload());
        startOver.textContent = 'Try Again?';
        const endContainer = document.createElement('div');
        endContainer.id = "endContainer";
        body.appendChild(endContainer)
        endContainer.appendChild(score);
        endContainer.appendChild(comScore)
        body.appendChild(endDiv);
        body.appendChild(startOver);
    }else if(points === 5){
        hideBody();
        const score = document.createElement('div');
        score.id = "scoreEnd";
        const comScore = document.createElement('div');
        comScore.id = "comScoreEnd";
        score.textContent = `Player: ${playerPoints}`;
        comScore.textContent = `Bot: ${points}`;
        const endDiv = document.createElement('div');
        endDiv.id = "end";
        endDiv.textContent = "You lost against a Bot...that\'s sad.";
        const startOver = document.createElement('button');
        startOver.addEventListener('click', (e) => location.reload());
        startOver.textContent = 'Try Again?';
        const endContainer = document.createElement('div');
        endContainer.id = "endContainer";
        body.appendChild(endContainer)
        endContainer.appendChild(score);
        endContainer.appendChild(comScore)
        body.appendChild(endDiv);
        body.appendChild(startOver);
    }else if(playerPoints === 5){
        hideBody();
        const score = document.createElement('div');
        score.id = "scoreEnd";
        const comScore = document.createElement('div');
        comScore.id = "comScoreEnd";
        score.textContent = `Player: ${playerPoints}`;
        comScore.textContent = `Bot: ${points}`;
        const endDiv = document.createElement('div');
        endDiv.id = "end"
        endDiv.textContent = "Wow you won! You just got lucky.";
        const startOver = document.createElement('button');
        startOver.addEventListener('click', (e) => location.reload());
        startOver.textContent = 'Try Again?';
        const endContainer = document.createElement('div');
        endContainer.id = "endContainer";
        body.appendChild(endContainer)
        endContainer.appendChild(score);
        endContainer.appendChild(comScore)
        body.appendChild(endDiv);
        body.appendChild(startOver);
        }
}