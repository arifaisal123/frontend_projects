// Pop-up functionality variables
let openButton = document.getElementById("open-popup");
let closeButton = document.getElementById("close-popup");
let rulesContainer = document.getElementById("rules-container");

// Play State Variables
let playScissors = document.getElementById("play-scissors");
let playPaper = document.getElementById("play-paper");
let playRock = document.getElementById("play-rock");
let playLizard = document.getElementById("play-lizard");
let playSpock = document.getElementById("play-spock");

let containerPlay = document.getElementById("container-play");
let playResult = document.getElementById("play-result");

// Result State Variables
let resultScissors = document.getElementById("result-scissors");
let resultPaper = document.getElementById("result-paper");
let resultRock = document.getElementById("result-rock");
let resultLizard = document.getElementById("result-lizard");
let resultSpock = document.getElementById("result-spock");

// Result Opponent State Variables
let resultOpponentScissors = document.getElementById("result-opponent-scissors");
let resultOpponentPaper = document.getElementById("result-opponent-paper");
let resultOpponentRock = document.getElementById("result-opponent-rock");
let resultOpponentLizard = document.getElementById("result-opponent-lizard");
let resultOpponentSpock = document.getElementById("result-opponent-spock");

// Pop-up functionality for showing rules
openButton.addEventListener("click", function() {
    rulesContainer.style.display = "flex";
});

closeButton.addEventListener("click", function() {
    rulesContainer.style.display = "none";
});


// Game Functionality 
playScissors.addEventListener("click", function() {
    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultScissors.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
    }
});


playPaper.addEventListener("click", function() {
    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultPaper.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
    }
});


playRock.addEventListener("click", function() {
    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultRock.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
    }
});


playLizard.addEventListener("click", function() {
    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultLizard.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
    }
});


playSpock.addEventListener("click", function() {
    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultSpock.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
    }
});


function opponentPlay() {
    let guess = Math.floor(Math.random() * 5) + 1;
    return guess;
}
