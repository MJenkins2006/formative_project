const choices = ["Rock", "Paper", "Scissors"];

function playerWin() {
    const playerSelector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");
    const count = document.querySelector("#playerWinsCount");
    
    count.textContent = `${parseInt(count.textContent) + 1}`;
    playerSelector.style.color = "rgb(0, 255, 0)";
    AISelector.style.color = "rgb(255, 0, 0)";
}

function draw() {
    const playerSelector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");
    const count = document.querySelector("#drawsCount");
    
    count.textContent = `${parseInt(count.textContent) + 1}`;
    playerSelector.style.color = "rgb(255, 255, 0)";
    AISelector.style.color = "rgb(255, 255, 0)";
}

function AIWin() {
    const playerSelector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");
    const count = document.querySelector("#AIWinsCount");
    
    count.textContent = `${parseInt(count.textContent) + 1}`;
    playerSelector.style.color = "rgb(255, 0, 0)";
    AISelector.style.color = "rgb(0, 255, 0)";
}

function selectWinner() {
    const playerSelector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");
    const output = document.querySelector("#output");

    if (playerSelector.textContent == AISelector.textContent) {
        output.textContent = `Two ${playerSelector.textContent}: Draw!`;
        draw();
    } else if (playerSelector.textContent == "Rock") {
        if (AISelector.textContent == "Scissors") {
            output.textContent = "Rock beats Scissors! Player wins!"
            playerWin();
        } else {
            output.textContent = "Rock loses to Paper! AI wins!"
            AIWin();
        }
    } else if (playerSelector.textContent == "Paper") {
        if (AISelector.textContent == "Rock") {
            output.textContent = "Paper beats Rock! Player wins!"
            playerWin();
        } else {
            output.textContent = "Paper loses to Scissors! AI wins!"
            AIWin();
        }
    } else if (playerSelector.textContent == "Scissors") {
        if (AISelector.textContent == "Paper") {
            output.textContent = "Scissors beats Paper! Player wins!"
            playerWin();
        } else {
            output.textContent = "Scissors loses to Rock! AI wins!"
            AIWin();
        }
    } else {
        output.textContent = "Whoops!";
    }
}

function enableButtons() {
    document.querySelector("#playerRock").disabled = false;
    document.querySelector("#playerPaper").disabled = false;
    document.querySelector("#playerScissors").disabled = false;
}

function disableButtons() {
    document.querySelector("#playerRock").disabled = true;
    document.querySelector("#playerPaper").disabled = true;
    document.querySelector("#playerScissors").disabled = true;
}

function resetColours() {
    const playerSelector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");

    playerSelector.style.color = "Black";
    AISelector.style.color = "Black";
}

function choiceSelected(event) {
    disableButtons();
    resetColours();
    const selected = document.querySelector(`#player${event.target.textContent}`);
    const selector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");
    selector.textContent = "Rock!";
    AISelector.textContent = "Rock!";
    setTimeout(() => {
        selector.textContent = "Paper!";
        AISelector.textContent = "Paper!";
    }, 200);
    setTimeout(() => {
        selector.textContent = "Scissors!";
        AISelector.textContent = "Scissors!";
    }, 400);
    setTimeout(() => {
        selector.textContent = selected.textContent;
        AISelector.textContent = choices[Math.floor(Math.random() * 3)];;
        selectWinner();
    }, 600);
    setTimeout(() => {enableButtons();}, 610);
}

function initialiseGame() {
    const rockButton = document.querySelector("#playerRock");
    const paperButton = document.querySelector("#playerPaper");
    const scissorsButton = document.querySelector("#playerScissors");

    rockButton.addEventListener("click", choiceSelected);
    paperButton.addEventListener("click", choiceSelected);
    scissorsButton.addEventListener("click", choiceSelected);
}