
function getComputerChoice(){
    choice=['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}

// function getHumanChoice(){
//      return prompt('enter your choice');
//    // return 'rock';
// }

humanScore=0;
computerScore=0;
function playRound(humanchoice,compch){
    humanch=humanchoice.toLowerCase();

    if(humanch==compch){
        return('tie');
    }
    else if(humanch=='rock'){
        if(compch=='paper'){
            computerScore++;
            return('You lose! Paper beats rock');
            
        }
        else {
            humanScore++;
            return('You win! Rock beats scissor'); 
        }
    }
    else if(humanch=='paper')
    {
        if(compch=='scissor') {
            computerScore++;
            return('You lose! Scissor beats paper');
            
        }
        else {
            humanScore++;
            return('You win! paper beats rock');
        }
    }
    else
    {
        if(compch=='rock') {
            computerScore++;
            return('You lose! rock beats scissor');
            
        }
        else {
            humanScore++;
            return('You win! paper beats scissor');
            
        }    
    }
}
//function to play the game in console without any gui
// function playGame()
// {
//     //rounds=5;
//     rounds=1;
//     for(let i=1;i<=rounds;i++)
//     {
        
//         playRound(getHumanChoice(),getComputerChoice());
//     }
//     console.log('human score',humanScore);
//     console.log('computer score', computerScore);
//     if(computerScore>humanScore) console.log('you lose'.toUpperCase());
//     else console.log('YOU WIN');
// }
//playGame();

const buttons=document.querySelectorAll('.btn');
const result=document.querySelector('#result');
const score=document.querySelector('#score');
const human_choice_element=document.createElement('div');
const comp_choice_element=document.createElement('div');
const res=document.createElement('div');
const res_five=document.createElement('div');
buttons.forEach((button)=>{
    button.addEventListener("click", () => {
        human_choice=button.textContent;
        comp_choice=getComputerChoice()
        //console.log(hchoice);
        outcome= playRound(human_choice,comp_choice);
        human_choice_element.textContent='Your choice :'+human_choice;
        comp_choice_element.textContent=' Computer choice :'+comp_choice;
        res.textContent=outcome;
        result.appendChild(human_choice_element);
        result.appendChild(comp_choice_element);
        result.appendChild(res);
        score.textContent='Human:'+humanScore+'| Computer: '+computerScore;
        if(humanScore>=5) {
            res_five.textContent=' Congratulations!!! You WON';
              buttons.forEach(btn => btn.disabled = true);
        }
    else if(computerScore>=5) {
        res_five.textContent=' Ahh!! You LOSE';
          buttons.forEach(btn => btn.disabled = true);

    }
        result.appendChild(res_five);
});
})

