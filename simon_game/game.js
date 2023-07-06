// Available button colors
const buttonColors = ["red", "blue", "green", "yellow"];

// Store game pattern of computer
let gamePattern = [];

// Store user clicked patter
let userClickedPattern = [];

// Store current game level
let level = 0;

// Check if game started
let hasStarted = false;

// Check if user from mobile or desktop/laptop
let isMobile = false;

// Check for user input to start the game (desktop/laptop)
$(document).keydown(function() {
    if (!isMobile) {
        startGame();
    }
});

// Check for user input to start the game (mobile)
$("#level-title-mobile").on("click", function() {
    isMobileVersion();
    if (isMobile) {
        startGame();
    }
});

// Check for game button(red, blue, green, yellow) clicks
$(".btn").on("click", function() {
    const userChosenColor = $(this).attr("id");

    // Add the userChosenColor in the userClickedPattern array
    userClickedPattern.push(userChosenColor);

    // Play the specific sound based on color
    playSound(userChosenColor);

    // Change button style when clicked
    animatePress(userChosenColor);

    // Check if answer is correct
    checkAnswer(userClickedPattern.length - 1);
});

// Show/hide game rules on click
$("#howToPlay").on("click", function() {
    $("#gameRules").toggle();
});

// Generate the next sequence of pattern by the computer
function nextSequence() {
    // Reset user pattern
    userClickedPattern = [];

    // Generate and store a random number between 0-3
    const randomNumber = Math.floor(Math.random() * 4);

    // Select one of the available colors (red, blue, green, yellow)
    const randomChosenColor = buttonColors[randomNumber];

    // Store the chosen color
    gamePattern.push(randomChosenColor);

    // Style effect for the button chosen by computer
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play sound along with the chosen button
    playSound(randomChosenColor);

    // Move to the next level, once the current user pattern matches
    level += 1;

    // Check if mobile or desktop/laptop version and update title accordingly 
    if (!isMobile) {
        $("#level-title").text(`Level ${level}`);
    } else {
        $("#level-title-mobile").text(`Level ${level}`);
    }
    
}

// Play sound based on the button input
function playSound(name) {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

// Change style effect based on pressing button
function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");

    // Return to original style after 100ms
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
      }, 100);
}

// Check if the answer is correct
function checkAnswer(currentLevel) {
    // Match the last clicked button with the gamePattern's last value
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        // If the match is successful
        if (userClickedPattern.toString() === gamePattern.toString()) {
            
            // Generate the next sequence after 1000ms
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } 

    } else {
        // If the pattern does not match
        gameOver();
    }
}

// Start the game based on user input and game state
function startGame() {
    // If the game has not started yet
    if (!hasStarted) {
        nextSequence();
        hasStarted = true;
    }
}

// Generate gameover sound, style, and message
function gameOver() {
    // Play the wrong answer sound
    playSound("wrong");

    // Add the game over effect
    $("body").addClass("game-over");

    // Remove game over effect after 200ms
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);

    // Display game over message based on mobile or desktop/laptop version
    if (!isMobile) {
        $("#level-title").text("Game Over, Press Any Key to Restart");
    } else {
        $("#level-title-mobile").text("Game Over, Click Here to Restart");
    }
    
    // Restart the game
    restartGame();
}

// Reset game level, gamePattern, and hasStarted to default values
function restartGame() {
  level = 0;
  gamePattern = [];
  hasStarted = false;
}

// Check if user is playing from mobile or desktop/laptop
function isMobileVersion() {
    if ($("#level-title").css("display") === "none") {
        isMobile = true;
    } else {
        isMobile = false;
    }
}
