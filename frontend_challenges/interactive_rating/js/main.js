// Change the color 
function changeCircleColor(num) {
    resetCircleColor();
    circle = document.getElementById(`rating${num}`);
    circle.style.color = "#fff";
    circle.style.backgroundColor = "hsl(217, 12%, 63%)";
}

// Resets all the rating circles' colors to default color
function resetCircleColor() {
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
