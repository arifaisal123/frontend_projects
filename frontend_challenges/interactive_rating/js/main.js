// Changes the circle color and rating number
function changeRating(num) {
    resetRating();
    
    let circle = document.getElementById(`rating${num}`);
    circle.style.color = "#fff";
    circle.style.backgroundColor = "hsl(217, 12%, 63%)";
    
    let userRating = document.getElementById("user_rating");
    userRating.innerHTML = num;
}

// Resets all the rating circles' colors to default color
function resetRating() {
    document.getElementById("rating1").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("rating1").style.backgroundColor = "rgba(149, 158, 172, 0.1)";

    document.getElementById("rating2").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("rating2").style.backgroundColor = "rgba(149, 158, 172, 0.1)";

    document.getElementById("rating3").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("rating3").style.backgroundColor = "rgba(149, 158, 172, 0.1)";

    document.getElementById("rating4").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("rating4").style.backgroundColor = "rgba(149, 158, 172, 0.1)";

    document.getElementById("rating5").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("rating5").style.backgroundColor = "rgba(149, 158, 172, 0.1)";
}

// Flips the Component horizontally by 180 degree
function flipCard() {
    ratingContainer = document.querySelector(".rating-container");
    ratingContainer.style.transform = "rotateY(180deg)";
  }
