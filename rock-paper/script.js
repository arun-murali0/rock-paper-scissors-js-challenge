const computerChoiseDisplay = document.getElementById("computerChoise");
const userChoiseDisplay = document.querySelector("#userChoise");
const displayResult = document.getElementById("result");
const posibleChoises = document.querySelectorAll("button");
let userChoise;
let computerChoise;
let result;

posibleChoises.forEach((posibleChoise) =>
  posibleChoise.addEventListener("click", (e) => {
    userChoise = e.target.id;
    userChoiseDisplay.innerHTML = userChoise;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const random = Math.floor(Math.random() * 3 + 1);

  if (random === 1) {
    computerChoise = "Rock";
  }
  if (random === 2) {
    computerChoise = "paper";
  }
  if (random === 3) {
    computerChoise = "scissors";
  }
  computerChoiseDisplay.innerHTML = computerChoise;
}

function getResult() {
  if (computerChoise === userChoise) {
    result = "It's a Draw";
  }
  if (computerChoise === "Rock" && userChoise === "scissors") {
    result = "You lost,computer Wins,";
  }
  if (computerChoise === "paper" && userChoise === "Rock") {
    result = "You lost,computer Wins,";
  }
  if (computerChoise === "scissors" && userChoise === "paper") {
    result = "You lost,computer Wins,";
  }
  if (userChoise === "Rock" && computerChoise === "scissors") {
    result = "Computer Lost,You win";
  }
  if (userChoise === "paper" && computerChoise === "Rock") {
    result = "Computer Lost,You win";
  }
  if (userChoise === "scissors" && computerChoise === "paper") {
    result = "Computer Lost,You win";
  }
  displayResult.innerHTML = result;
}
