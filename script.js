let personChoiceDisplay = document.getElementById("per_choice");
let computerChoiceDisplay = document.getElementById("compChoice");
let resultDisplay = document.getElementById("result");

let playerScore = document.getElementById("yscore");
let computerScore = document.getElementById("cscore");

let possibleChoices = document.querySelectorAll("button");

let pscore = 0;
let cscore = 0;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    let personChoice = e.target.id;
    personChoiceDisplay.innerHTML = personChoice;
    generateCompChoice();
    generateResult();
  })
);

function generateCompChoice() {
  let randomNumber = Math.floor(Math.random() * possibleChoices.length);
  if (randomNumber === 1) {
    possibleChoices = "ROCK";
  } else if (randomNumber === 2) {
    possibleChoices = "PAPER";
  } else if (randomNumber === 3) {
    possibleChoices = "SCISSORS";
  }
  computerChoiceDisplay.innerHTML = possibleChoices;
}

function generateResult() {
  let personChoice = personChoiceDisplay.innerHTML;
  let computerChoice = computerChoiceDisplay.innerHTML;
  if (personChoice === computerChoice) {
    resultDisplay.innerHTML = "IT'S A TIE!";
    playerScore.innerHTML = pscore;
    computerScore.innerHTML = cscore;
    return;
  } else if (personChoice === "ROCK" && computerChoice === "PAPER") {
    resultDisplay.innerHTML = "YOU LOSE!";
    cscore++;
    computerScore.innerHTML = cscore;
    return;
  } else if (personChoice === "ROCK" && computerChoice === "SCISSORS") {
    resultDisplay.innerHTML = "YOU ARE THE WINNER!";
    pscore++;
    playerScore.innerHTML = pscore;
    return;
  } else if (personChoice === "PAPER" && computerChoice === "ROCK") {
    resultDisplay.innerHTML = "YOU ARE THE WINNER!";
    pscore++;
    playerScore.innerHTML = pscore;
    return;
  } else if (personChoice === "PAPER" && computerChoice === "SCISSORS") {
    resultDisplay.innerHTML = "YOU LOSE!";
    cscore++;
    computerScore.innerHTML = cscore;
    return;
  } else if (personChoice === "SCISSORS" && computerChoice === "PAPER") {
    resultDisplay.innerHTML = "YOU ARE THE WINNER!";
    pscore++;
    playerScore.innerHTML = pscore;
    return;
  } else if (personChoice === "SCISSORS" && computerChoice === "ROCK") {
    resultDisplay.innerHTML = "YOU LOSE!";
    cscore++;
    computerScore.innerHTML = cscore;
    return;
  } 
}
