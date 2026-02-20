const games = ["RPS", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"];

function gridBuilder() {
    const grid = document.querySelector(".gameGrid");
    for (let i = 0; i < games.length; i++) {
        const button = document.createElement("button");
        button.className = "gameButton";
        button.textContent = games[i];
        button.onclick = () => window.location.href = `./games/${games[i]}/index.html`;
        grid.appendChild(button);
    }
}

function returnBuilder() {
    const returnArea = document.querySelector("#returner");
    const button = document.createElement("button");
    button.className = "returnButton";
    button.textContent = "Return to Menu";
    button.onclick = () => window.location.href = `../../index.html`;
    returnArea.appendChild(button);
}