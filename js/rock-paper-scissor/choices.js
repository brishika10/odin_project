
function getComputerChoice(){
    choice=['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
     return prompt('enter your choice');
   // return 'rock';
}

humanScore=0;
computerScore=0;
function playRound(humanchoice,compch){
    humanch=humanchoice.toLowerCase();

    if(humanch==compch){
        console.log('tie');
    }
    else if(humanch=='rock'){
        if(compch=='paper'){
             console.log('You lose! Paper beats rock');
            computerScore++;
        }
        else {
            console.log('You win! Rock beats scissor');
            humanScore++;
        }
    }
    else if(humanch=='paper')
    {
        if(compch=='scissor') {
            console.log('You lose! Scissor beats paper');
            computerScore++;
        }
        else {
            console.log('You win! paper beats rock');
            humanScore++;
        }
    }
    else
    {
        if(compch=='rock') {
            console.log('You lose! rock beats scissor');
            computerScore++;
        }
        else {
            console.log('You win! paper beats scissor');
            humanScore++;
        }    
    }
}
function playGame()
{
    rounds=5;
    for(let i=1;i<=rounds;i++)
    {
        
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log('human score',humanScore);
    console.log('computer score', computerScore);
    if(computerScore>humanScore) console.log('you lose'.toUpperCase());
    else console.log('YOU WIN');
}
playGame();