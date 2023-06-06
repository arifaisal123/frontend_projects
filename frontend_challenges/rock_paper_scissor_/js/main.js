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

// Final Result Variables
let finalResult = document.getElementById("final-result");
let win = document.getElementById("win");
let draw = document.getElementById("draw");
let lose = document.getElementById("lose");
let finalResultButton = document.getElementById("final-result-button");


// Pop-up functionality for showing rules
openButton.addEventListener("click", function() {
    rulesContainer.style.display = "flex";
});

closeButton.addEventListener("click", function() {
    rulesContainer.style.display = "none";
});


// Game Functionality
// Scissors functionality 
playScissors.addEventListener("click", function() {
    hidePreviousResults();

    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultScissors.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
        showDraw();
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
        showLose();
    }
});


// Paper functionality
playPaper.addEventListener("click", function() {
    hidePreviousResults();
    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultPaper.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
        showDraw();
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
        showWin();
    }
});


// Rock functionality
playRock.addEventListener("click", function() {
    hidePreviousResults();

    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultRock.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
        showDraw();
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
        showLose();
    }
});


// Lizard functionality
playLizard.addEventListener("click", function() {
    hidePreviousResults();

    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultLizard.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
        showDraw();
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
        showWin();
    }
});


// Spock functionality
playSpock.addEventListener("click", function() {
    hidePreviousResults();

    containerPlay.style.display = "none";

    playResult.style.display = "flex";
    resultSpock.style.display = "flex";

    let opponentGuess = opponentPlay();

    if (opponentGuess == 1) {
        resultOpponentScissors.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 2) {
        resultOpponentPaper.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 3) {
        resultOpponentRock.style.display = "flex";
        showWin();
    }
    else if (opponentGuess == 4) {
        resultOpponentLizard.style.display = "flex";
        showLose();
    }
    else if (opponentGuess == 5) {
        resultOpponentSpock.style.display = "flex";
        showDraw();
    }
});


// Opponent's guess
function opponentPlay() {
    let guess = Math.floor(Math.random() * 5) + 1;
    return guess;
}


// Show win message, and update score
function showWin() {
    finalResult.style.display = "flex";
    win.style.display = "flex";
    finalResultButton.style.display = "block";
}


// Show draw message
function showDraw() {
    finalResult.style.display = "flex";
    draw.style.display = "flex";
    finalResultButton.style.display = "block";
}


// Show lose message
function showLose() {
    finalResult.style.display = "flex";
    lose.style.display = "flex";
    finalResultButton.style.display = "block";
}


// Hide result
function hidePreviousResults() {
    finalResult.style.display = "none";
    win.style.display = "none";
    draw.style.display = "none";
    lose.style.display = "none";
    finalResultButton.style.display = "none";
}