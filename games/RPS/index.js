const choices = ["Rock", "Paper", "Scissors"];

function selectWinner() {
    const playerSelector = document.querySelector("#playerSelected");
    const AISelector = document.querySelector("#AISelected");
    const output = document.querySelector("#output");
    const playerWinsCount = document.querySelector("#playerWinsCount");
    const drawsCount = document.querySelector("#drawsCount");
    const AIWinsCount = document.querySelector("#AIWinsCount");

    if (playerSelector.textContent == AISelector.textContent) {
        output.textContent = `Two ${playerSelector.textContent}: Draw!`;
        drawsCount.textContent = `${parseInt(drawsCount.textContent) + 1}`;
    } else if (playerSelector.textContent == "Rock") {
        if (AISelector.textContent == "Scissors") {
            output.textContent = "Rock beats Scissors! Player wins!"
            playerWinsCount.textContent = `${parseInt(playerWinsCount.textContent) + 1}`;
        } else {
            output.textContent = "Rock loses to Paper! AI wins!"
            AIWinsCount.textContent = `${parseInt(AIWinsCount.textContent) + 1}`;
        }
    } else if (playerSelector.textContent == "Paper") {
        if (AISelector.textContent == "Rock") {
            output.textContent = "Paper beats Rock! Player wins!"
            playerWinsCount.textContent = `${parseInt(playerWinsCount.textContent) + 1}`;
        } else {
            output.textContent = "Paper loses to Scissors! AI wins!"
            AIWinsCount.textContent = `${parseInt(AIWinsCount.textContent) + 1}`;
        }
    } else if (playerSelector.textContent == "Scissors") {
        if (AISelector.textContent == "Paper") {
            output.textContent = "Scissors beats Paper! Player wins!"
            playerWinsCount.textContent = `${parseInt(playerWinsCount.textContent) + 1}`;
        } else {
            output.textContent = "Scissors loses to Rock! AI wins!"
            AIWinsCount.textContent = `${parseInt(AIWinsCount.textContent) + 1}`;
        }
    } else {
        output.textContent = "Whoops!";
    }
}

function aiChoice() {
    const selector = document.querySelector("#AISelected");
    selector.textContent = choices[Math.floor(Math.random() * 3)];
}

function choiceSelected(event) {
    const selected = document.querySelector(`#player${event.target.textContent}`);
    const selector = document.querySelector("#playerSelected");
    selector.textContent = selected.textContent;
    selectWinner();
}

function playerSelector() {
    aiChoice();
    const rockButton = document.querySelector("#playerRock");
    const paperButton = document.querySelector("#playerPaper");
    const scissorsButton = document.querySelector("#playerScissors");

    rockButton.addEventListener("click", choiceSelected);
    paperButton.addEventListener("click", choiceSelected);
    scissorsButton.addEventListener("click", choiceSelected);

    setInterval(() => aiChoice(), 200);
}