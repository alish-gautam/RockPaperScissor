function getComputerChoice(){
    let choices=["Rock",'Paper',"Scissor"]
let random=choices[Math.floor(Math.random()*choices.length)]
return random
}
let player=0
let computer=0
function theWinner(){
let playerSelection=prompt("Enter your choice:")
let computerSelection=getComputerChoice()

playerSelection=playerSelection.toLowerCase()
computerSelection=computerSelection.toLowerCase()
console.log( playerSelection)
 console.log( computerSelection)

 //conditions
if (playerSelection=="rock" && computerSelection=="paper"){
    console.log("You Lose! Paper beats Rock")
    return(
        computer++
    )
}
else if (playerSelection=="paper" && computerSelection=="rock"){
    console.log("You Win! Paper beats Rock")
    return player++
}
else if (playerSelection=="scissor" && computerSelection=="rock"){
    console.log("You Lose! Rock beats Scissor")
    return computer++
}
else if (playerSelection=="rock" && computerSelection=="scissor"){
    console.log("You Win! Rock beats Scissor")
    return(
         player++
    )
}
else if (playerSelection=="paper" && computerSelection=="scissor"){
    console.log("You Lose! Scissor beats Paper" )
    return computer++
}
else if(playerSelection=="scissor" && computerSelection=="paper"){
    console.log("You Win! Scissor beats Paper")
   return  player++
}
else if(computerSelection==playerSelection)[
    console.log("Tie")
]
else{
    console.log("Invalid Input")
}

    }

    function theGame(){
        for(let i=0; i<5;i++){
            theWinner()
        }
        if(player>computer){
            console.log(`Player's Score:${player}`)
            console.log(`Computer's Score:${computer}`)
            console.log("Player Wins")
        }
        else if(player<computer){
            console.log(`Player's Score:${player}`)
            console.log(`Computer's Score:${computer}`)
            console.log("Computer Wins")
        }
        else{
            console.log(`Player's Score:${player}`)
            console.log(`Computer's Score:${computer}`)
            console.log("Tie")
        }
        }
        theGame()
    
