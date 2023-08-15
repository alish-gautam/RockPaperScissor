
// Random computer choices generator
function getComputerChoice(){
let choices=["rock",'paper',"scissor"]
let random=choices[Math.floor(Math.random()*choices.length)]
return random
}

let result=document.getElementById("result")
result.classList.add("results")
// player and computer scores
let player=0
let computer=0

//All game concepts are defined here
function theWinner(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase()
 //conditions
    if (playerSelection=="rock" && computerSelection=="paper"){
        result.innerText="You Lose! Paper beats Rock"
        console.log(player)
        return(
            computer++
        )
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        result.innerText="You Win! Paper beats Rock"
        return player++
    }
    else if (playerSelection=="scissor" && computerSelection=="rock"){
        result.innerText="You Lose! Rock beats Scissor"
        return computer++
    }
    else if (playerSelection=="rock" && computerSelection=="scissor"){
        result.innerText="You Win! Rock beats Scissor"
        return(
         player++
    )
    }
    else if (playerSelection=="paper" && computerSelection=="scissor"){
        result.innerText="You Lose! Scissor beats Paper" 
        return computer++
    }
    else if(playerSelection=="scissor" && computerSelection=="paper"){
        result.innerText="You Win! Scissor beats Paper"
        return  player++
    }
    else if(computerSelection==playerSelection)[
        result.innerText="Tie"
    ]
    else{
        result.innerText="Invalid Input"
    }

    }
//Here, the winner of 5 rounds is decided
    function theGame(playerSelection){
        let computerSelection=getComputerChoice()
       
        theWinner(playerSelection,computerSelection)
        let newElement=document.createElement("p")
        newElement.classList.add("para")
        if(player==5){
            newElement.innerHTML=`player score:${player}<br>computer score:${computer}<br>player wins`
            
        }
        else if(computer==5){
            newElement.innerHTML=`player score:${player}<br>computer score:${computer}<br>computer wins`
        }
        result.appendChild(newElement)
        checkGameEnd()
        
        }

    document.getElementById("rock").addEventListener("click",()=>{
        theGame("rock")
    })
    document.getElementById("paper").addEventListener("click",()=>{
        theGame("paper")
    })
    document.getElementById("scissor").addEventListener("click",()=>{
        theGame("scissor")
    })
    let newtry
    //play the game again

    //End the game after  whoever scores 5 first
    function checkGameEnd(){
        if(player==5){
            result.innerText="Game Over!!! Player Wins"
            removeButtons()
        }
        else if(computer==5){
            result.innerText="Game Over!!! Computer Wins"
            removeButtons()
        }
    }
   function removeButtons(){
    document.getElementById("rock").remove()   
    document.getElementById("paper").remove()
    document.getElementById("scissor").remove()
   }
