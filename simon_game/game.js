const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let hasStarted = false;
let isMobile = false;

$(".btn").on("click", function() {
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function() {
    if (!isMobile) {
        startGame();
    }
});

$("#level-title-mobile").on("click", function() {
    isMobileVersion();
    if (isMobile) {
        startGame();
    }
});

function nextSequence() {
    userClickedPattern = [];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

    level += 1;
    if (!isMobile) {
        $("#level-title").text(`Level ${level}`);
    } else {
        $("#level-title-mobile").text(`Level ${level}`);
    }
    
}

function playSound(name) {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");

    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success!");

        if (userClickedPattern.toString() === gamePattern.toString()) {
            console.log("pattern successful");
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } 

    } else {
        console.log("Wrong!");
        gameOver();
    }
}

function startGame() {
    if (!hasStarted) {
        nextSequence();
        hasStarted = true;
    }
}

function gameOver() {
    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);

    if (!isMobile) {
        $("#level-title").text("Game Over, Press Any Key to Restart");
    } else {
        $("#level-title-mobile").text("Game Over, Click Here to Restart");
    }
    
    restartGame();
}

function restartGame() {
  level = 0;
  gamePattern = [];
  hasStarted = false;
}

function isMobileVersion() {
    if ($("#level-title").css("display") === "none") {
        isMobile = true;
    } else {
        isMobile = false;
    }
}