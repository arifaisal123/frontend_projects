const toggleButton = document.getElementById("toggleButton");
const calculatorScreen = document.getElementById("calculatorScreen");
const buttons = document.querySelectorAll(".numButton");
const resetButton = document.getElementById("buttonReset");
const deleteButton = document.getElementById("buttonDel");

toggleButton.addEventListener("click", () => {
    changeButtonPosition();
});

buttons.forEach((button) => {
    button.addEventListener("click", updateScreen);
});

resetButton.addEventListener("click", () => {
    calculatorScreen.textContent = 0;
});

deleteButton.addEventListener("click", () => {
    calculatorScreen.textContent = calculatorScreen.textContent.substring(0, calculatorScreen.textContent.length - 1)
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

function updateScreen(event) {
    const buttonTextContent = event.target.textContent;
    if (calculatorScreen.textContent === "0"){
        calculatorScreen.textContent = buttonTextContent;
    } else {
        calculatorScreen.textContent = calculatorScreen.textContent + buttonTextContent;   
    }
}
