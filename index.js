function getComputerChoice(){
  //randomly return rock, papers or scissors
  let options = ["rock","paper","scissors"];
  let choice = Math.floor(Math.random() * 3);

  return options[choice];
}

function playRound(player, computerSelection){
  let playerSelection = player.toLowerCase();
  if(playerSelection == computerSelection){
    console.log(`Tie! Both chose ${playerSelection}`);
    return 0;
  }
  else{
    if(playerSelection == "rock" && computerSelection == "paper"){ 
      console.log("You Lose! Paper beats Rock");
      return 0;
    }
    if(playerSelection == "rock" && computerSelection == "scissors"){
      console.log("You Win! Rock beats Scissors");
      return 1;
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
      console.log("You Win! Paper beats Rock");
      return 1;
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){ 
      console.log("You Lose! Scissors beats Paper");
      return 0;
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
      console.log("You Win! Scissors beats Paper");
      return 1;
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
      console.log("You Lose! Rock beats Scissors");
      return 0;
  }
  }
}

function multipleRoundGame(rounds){
  let victories = 0;

  for(let i=0; i<rounds; i++){
    let playerSelection = prompt("Type your choice:");
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    if(result != 0){ ++victories; }
  }

  if(victories > Math.floor(rounds)){
    return "You Win!";
  }
  else if(victories < Math.floor(rounds)){
    return "You Lose!";
  }
  else{
    return "Tie!";
  }
}

function game(){

  console.log( multipleRoundGame(5) );
}