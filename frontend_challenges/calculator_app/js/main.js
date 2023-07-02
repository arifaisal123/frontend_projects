const toggleButton = document.getElementById("toggleButton");
const calculatorScreen = document.getElementById("calculatorScreen");
const buttons = document.querySelectorAll(".numButton");
const resetButton = document.getElementById("buttonReset");
const deleteButton = document.getElementById("buttonDel");
const addButton = document.getElementById("buttonAdd");
const equalButton = document.getElementById("buttonEqualTo");
const subtractionButton = document.getElementById("buttonSub");
const divisionButton = document.getElementById("buttonDiv");
const multiplicationButton = document.getElementById("buttonMult");
const decimalButton = document.getElementById("buttonDec");
let isDecimalAdded = false;
let isCalculated = false;

toggleButton.addEventListener("click", changeButtonPosition);

buttons.forEach((button) => {
    button.addEventListener("click", updateScreen);
});

resetButton.addEventListener("click", () => {
    calculatorScreen.textContent = "0";
    isDecimalAdded = false;
});

deleteButton.addEventListener("click", () => {
    if (calculatorScreen.textContent.endsWith(".")) {
        isDecimalAdded = false;
    }
    calculatorScreen.textContent = calculatorScreen.textContent.substring(0, calculatorScreen.textContent.length - 1)
});

addButton.addEventListener("click",  addNumbers);
subtractionButton.addEventListener("click", subtractNumbers);
divisionButton.addEventListener("click", divideNumbers);
multiplicationButton.addEventListener("click", multiplyNumbers);
decimalButton.addEventListener("click", addDecimal);

equalButton.addEventListener("click", calculate);

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
    if (isCalculated === true) {
        calculatorScreen.textContent = "";
        isCalculated = false;
        isDecimalAdded = false;
    }

    if ((calculatorScreen.textContent === "0") || (calculatorScreen.textContent === "")) {
        calculatorScreen.textContent = buttonTextContent;
    } else if (calculatorScreen.textContent.length < 17) {
        if (calculatorScreen.textContent.length === 16) {
            alert("Calculator screen is limited to 16 digits!");
            console.log("Calculator screen digits limit of 16 exceeded.");
        } else {
            calculatorScreen.textContent = calculatorScreen.textContent + buttonTextContent; 
        }
    }
}

function addNumbers() {
    if (calculatorScreen.textContent.length < 16) {
        calculatorScreen.textContent += "+";
        isDecimalAdded = false;
    }
}

function subtractNumbers() {
    if (calculatorScreen.textContent.length < 16) {
        calculatorScreen.textContent += "-";
        isDecimalAdded = false;
    }
}

function divideNumbers() {
    if (calculatorScreen.textContent.length < 16) {
        calculatorScreen.textContent += "/";
        isDecimalAdded = false;
    }
}

function multiplyNumbers() {
    if (calculatorScreen.textContent.length < 16) {
        calculatorScreen.textContent += "*";
        isDecimalAdded = false;
    }
}

function addDecimal() {
    if (!isDecimalAdded) {
        calculatorScreen.textContent += ".";
        isDecimalAdded = true;
    }
}

function calculate() {
    try {
        const result = eval(calculatorScreen.textContent);
        calculatorScreen.textContent = result;
        isCalculated = true;
        isDecimalAdded = false;
    } catch (error) {
        calculatorScreen.textContent = "Error";
    }    
}
