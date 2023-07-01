const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    changeButtonPosition();
});

function changeButtonPosition() {
    if (toggleButton.classList.contains("justify-content-start")) {
        toggleButton.classList.remove("justify-content-start");
        toggleButton.classList.add("justify-content-center");
    } else if (toggleButton.classList.contains("justify-content-center")) {
        toggleButton.classList.remove("justify-content-center");
        toggleButton.classList.add("justify-content-end");
    } else {
        toggleButton.classList.remove("justify-content-end");
        toggleButton.classList.add("justify-content-start");
    }
}