let openButton = document.getElementById("open-popup");
let closeButton = document.getElementById("close-popup");
let rulesContainer = document.getElementById("rules-container");

openButton.addEventListener("click", function() {
    rulesContainer.style.display = "block";
});

closeButton.addEventListener("click", function() {
    rulesContainer.style.display = "none";
});