const mainBody = document.getElementById("mainBody");
const headerContainer = document.getElementById("headerContainer");
const calcText = document.getElementById("calcText");
const themeText = document.getElementById("themeText");
const themeNum = document.getElementById("themeNum");
const toggleButton = document.getElementById("toggleButton");
const circleButton = document.getElementById("circleButton");
const calculatorScreen = document.getElementById("calculatorScreen");
const calcKeypad = document.getElementById("calcKeypad");
const buttons = document.querySelectorAll(".numButton");
const resetButton = document.getElementById("buttonReset");
const deleteButton = document.getElementById("buttonDel");
const addButton = document.getElementById("buttonAdd");
const equalButton = document.getElementById("buttonEqualTo");
const subtractionButton = document.getElementById("buttonSub");
const divisionButton = document.getElementById("buttonDiv");
const multiplicationButton = document.getElementById("buttonMult");
const decimalButton = document.getElementById("buttonDec");
const gridItems = document.querySelectorAll(".grid-item");
let isDecimalAdded = false;
let isCalculated = false;
const attrText = document.getElementById("attrText");
const attrLinks = document.querySelectorAll(".attrLink");


buttons.forEach((button) => {
    button.addEventListener("click", updateScreen);
});

document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "1":
            updateScreen(event, source="1");
            break
        case "2":
            updateScreen(event, source="2");
            break
        case "3":
            updateScreen(event, source="3");
            break
        case "4":
            updateScreen(event, source="4");
            break
        case "5":
            updateScreen(event, source="5");
            break
        case "6":
            updateScreen(event, source="6");
            break
        case "7":
            updateScreen(event, source="7");
            break
        case "8":
            updateScreen(event, source="8");
            break
        case "9":
            updateScreen(event, source="9");
            break
        case "0":
            updateScreen(event, source="0");
            break
        case "+":
            addNumbers();
            break
        case "-":
            subtractNumbers();
            break
        case "*":
            multiplyNumbers();
            break
        case "/":
            divideNumbers();
            break
        case ".":
            addDecimal();
            break
        case "Enter":
            calculate();
            break
        case "Delete":
            deleteDigits();
            break
        case " ":
            resetScreen();
            break
        case "t":
            toggleBehavior();
            break
    }
});


toggleButton.addEventListener("click", toggleBehavior);
addButton.addEventListener("click",  addNumbers);
deleteButton.addEventListener("click", deleteDigits);
resetButton.addEventListener("click", resetScreen);
subtractionButton.addEventListener("click", subtractNumbers);
divisionButton.addEventListener("click", divideNumbers);
multiplicationButton.addEventListener("click", multiplyNumbers);
decimalButton.addEventListener("click", addDecimal);
equalButton.addEventListener("click", calculate);


function toggleBehavior() {
    if (toggleButton.classList.contains("justify-content-start")) { 
        toggleButton.classList.remove("justify-content-start");
        toggleButton.classList.add("justify-content-center");

        mainBody.classList.remove("bg-color-main");
        mainBody.classList.add("bg-color-main-theme2");

        headerContainer.classList.remove("bg-color-main");
        headerContainer.classList.add("bg-color-main-theme2");

        calcText.classList.remove("text-white");
        calcText.classList.add("color-theme2-text");

        themeText.classList.remove("text-white");
        themeText.classList.add("color-theme2-text");

        themeNum.classList.remove("text-white");
        themeNum.classList.add("color-theme2-text");

        toggleButton.classList.remove("bg-color-toggle");
        toggleButton.classList.add("bg-color-toggle-theme2");

        circleButton.classList.remove("bg-color-red");
        circleButton.classList.add("bg-color-orange");
        circleButton.addEventListener("mouseenter", () => {
            circleButton.classList.add("color-orange-hover");
        });
        circleButton.addEventListener("mouseleave", () => {
            circleButton.classList.remove("color-orange-hover");
        });

        calcKeypad.classList.remove("color-screen-background");
        calcKeypad.classList.add("color-keypad-background-theme2");

        calculatorScreen.classList.remove("color-screen-background", "text-white");
        calculatorScreen.classList.add("color-screen-background-theme2", "color-theme2-text");

        gridItems.forEach((item) => {
            item.classList.remove("color-text-dark-grayish-blue", "color-key-background-1");
            item.classList.add("color-theme2-text", "color-key-background-1-theme2", "button-box-shadow2");
        });

        deleteButton.classList.remove("color-key-background-2", "button-box-shadow1", "color-theme2-text");
        deleteButton.classList.add("bg-color-cyan-theme2", "color-white", "box-shadow-cyan");
        deleteButton.addEventListener("mouseenter", () => {
            deleteButton.style.backgroundColor = "hsl(185, 36%, 48%)";
        });
        deleteButton.addEventListener("mouseleave", () => {
            deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
        });

        resetButton.classList.remove("color-key-background-2", "button-box-shadow1", "color-theme2-text");
        resetButton.classList.add("bg-color-cyan-theme2", "color-white", "box-shadow-cyan");
        resetButton.addEventListener("mouseenter", () => {
            resetButton.style.backgroundColor = "hsl(185, 36%, 48%)";
        });
        resetButton.addEventListener("mouseleave", () => {
            resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
        });

        equalButton.classList.remove("color-key-background-3", "color-theme2-text");
        equalButton.classList.add("bg-color-orange-theme2", "color-white", "box-shadow-orange");
        equalButton.addEventListener("mouseenter", () => {
            equalButton.classList.add("bg-color-orange-theme2-hover");
        });
        equalButton.addEventListener("mouseleave", () => {
            equalButton.classList.remove("bg-color-orange-theme2-hover");
        });

        attrText.classList.remove("text-white");
        attrText.classList.add("color-cyan");
        attrLinks.forEach((link) => {
            link.style.color = "hsl(25, 98%, 40%)";
        });

    } else if (toggleButton.classList.contains("justify-content-center")) {
        toggleButton.classList.remove("justify-content-center");
        toggleButton.classList.add("justify-content-end");

        mainBody.classList.remove("bg-color-main-theme2");
        mainBody.classList.add("bg-color-main-theme3");

        headerContainer.classList.remove("bg-color-main-theme2");
        headerContainer.classList.add("bg-color-main-theme3");

        calcText.classList.remove("color-theme2-text");
        calcText.classList.add("color-theme3-text");

        themeText.classList.remove("color-theme2-text");
        themeText.classList.add("color-theme3-text");

        themeNum.classList.remove("color-theme2-text");
        themeNum.classList.add("color-theme3-text");

        toggleButton.classList.remove("bg-color-toggle-theme2");
        toggleButton.classList.add("bg-color-toggle-theme3");

        circleButton.classList.remove("bg-color-orange");
        circleButton.classList.add("bg-color-cyan");
        circleButton.addEventListener("mouseenter", () => {
            circleButton.classList.add("color-cyan2-hover");
        });
        circleButton.addEventListener("mouseleave", () => {
            circleButton.classList.remove("color-cyan2-hover");
        });

        calcKeypad.classList.remove("color-keypad-background-theme2");
        calcKeypad.classList.add("color-keypad-background-theme3");

        calculatorScreen.classList.remove("color-screen-background-theme2", "color-theme2-text");
        calculatorScreen.classList.add("color-screen-background-theme3", "color-theme3-text");

        gridItems.forEach((item) => {
            item.classList.remove("color-theme2-text", "color-key-background-1-theme2", "button-box-shadow2");
            item.classList.add("color-theme3-text", "color-key-background-1-theme3", "button-box-shadow3");

            item.addEventListener("mouseenter", () => {
                item.classList.add("color-key-background-1-theme3-hover");
            });
            item.addEventListener("mouseleave", () => {
                item.classList.remove("color-key-background-1-theme3-hover");
            });
        });
     
        deleteButton.classList.remove("color-theme3-text", "color-key-background-1-theme3", "button-box-shadow3");
        deleteButton.classList.add("bg-color-violet-theme3", "color-white", "box-shadow-violet");
        deleteButton.addEventListener("mouseenter", () => {
            deleteButton.classList.add("bg-color-violet-theme3-hover");
        });
        deleteButton.addEventListener("mouseleave", () => {
            deleteButton.classList.remove("bg-color-violet-theme3-hover");
        });

        resetButton.classList.remove("color-theme3-text", "color-key-background-1-theme3", "button-box-shadow3");
        resetButton.classList.add("bg-color-violet-theme3", "color-white", "box-shadow-violet");
        resetButton.addEventListener("mouseenter", () => {
            resetButton.classList.add("bg-color-violet-theme3-hover");
        });
        resetButton.addEventListener("mouseleave", () => {
            resetButton.classList.remove("bg-color-violet-theme3-hover");
        });

        equalButton.classList.remove("bg-color-orange-theme2", "color-theme3-text", "color-white", "box-shadow-orange");
        equalButton.classList.add("bg-color-cyan-theme3", "text-black", "box-shadow-cyan2");
        equalButton.addEventListener("mouseenter", () => {
            equalButton.classList.add("bg-color-cyan-theme3-hover");
        });
        equalButton.addEventListener("mouseleave", () => {
            equalButton.classList.remove("bg-color-cyan-theme3-hover");
        });

        attrText.classList.remove("color-cyan");
        attrText.classList.add("color-theme3-text");
        attrLinks.forEach((link) => {
            link.classList.remove("color-orange");
            link.classList.add("color-cyan2");
        });

    } else {
        toggleButton.classList.remove("justify-content-end");
        toggleButton.classList.add("justify-content-start");

        mainBody.classList.remove("bg-color-main-theme3");
        mainBody.classList.add("bg-color-main");

        headerContainer.classList.remove("bg-color-main-theme3");
        headerContainer.classList.add("bg-color-main");

        calcText.classList.remove("color-theme3-text");
        calcText.classList.add("text-white");

        themeText.classList.remove("color-theme3-text");
        themeText.classList.add("text-white");

        themeNum.classList.remove("color-theme3-text");
        themeNum.classList.add("text-white");

        toggleButton.classList.remove("bg-color-toggle-theme3");
        toggleButton.classList.add("bg-color-toggle");

        circleButton.classList.remove("bg-color-cyan");
        circleButton.classList.add("bg-color-red");
        circleButton.addEventListener("mouseenter", () => {
            circleButton.classList.remove("color-cyan2-hover");
            circleButton.classList.add("bg-color-red-theme1-hover ");
        });
        circleButton.addEventListener("mouseleave", () => {
            circleButton.classList.remove("bg-color-red-theme1-hover");
        });

        calcKeypad.classList.remove("color-keypad-background-theme3");
        calcKeypad.classList.add("color-screen-background");

        calculatorScreen.classList.remove("color-screen-background-theme3", "color-theme3-text");
        calculatorScreen.classList.add("color-screen-background", "text-white");

        gridItems.forEach((item) => {
            item.classList.remove("color-theme3-text", "color-key-background-1-theme3", "button-box-shadow3");
            item.classList.add("color-text-dark-grayish-blue", "color-key-background-1");

            item.addEventListener("mouseenter", () => {
                item.classList.remove("color-key-background-1-theme3-hover");
                item.classList.add("color-key-background-1-theme1-hover");
            });
            item.addEventListener("mouseleave", () => {
                item.classList.remove("color-key-background-1-theme1-hover");
            });
        });
     
        deleteButton.classList.remove("bg-color-violet-theme3", "color-white", "box-shadow-violet", "box-shadow-cyan");
        deleteButton.classList.add("color-key-background-2", "button-box-shadow1");
        deleteButton.addEventListener("mouseenter", () => {
            deleteButton.classList.remove("bg-color-violet-theme3-hover");
            deleteButton.classList.add("color-key-background-1-theme1-hover");
        });
        deleteButton.addEventListener("mouseleave", () => {
            deleteButton.classList.remove("bg-color-blue-theme1-hover");
        });

        resetButton.classList.remove("bg-color-violet-theme3", "color-white", "box-shadow-violet", "box-shadow-cyan");
        resetButton.classList.add("color-key-background-2", "button-box-shadow1");
        resetButton.addEventListener("mouseenter", () => {
            resetButton.classList.remove("bg-color-violet-theme3-hover");
            resetButton.classList.add("color-key-background-1-theme1-hover");
        });
        resetButton.addEventListener("mouseleave", () => {
            resetButton.classList.remove("bg-color-blue-theme1-hover");
        });

        equalButton.classList.remove("bg-color-cyan-theme3", "text-black", "box-shadow-cyan2");
        equalButton.classList.add("color-key-background-3");
        equalButton.addEventListener("mouseenter", () => {
            equalButton.classList.remove("bg-color-cyan-theme3-hover");
            equalButton.classList.add("bg-color-red-theme1-hover");
        });
        equalButton.addEventListener("mouseleave", () => {
            equalButton.classList.remove("bg-color-red-theme1-hover");
        });

        attrText.classList.remove("color-theme3-text");
        attrText.classList.add("text-white");
        attrLinks.forEach((link) => {
            link.classList.remove("color-cyan2");
            link.classList.add("color-red");
        });
    }
}

function updateScreen(event, source="button") {
    let buttonTextContent = "";
    if (source==="button") {
        buttonTextContent = event.target.textContent;
    } else {
        buttonTextContent = source;
    }
    
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
            calculatorScreen.textContent += buttonTextContent; 
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

function deleteDigits() {
    if (calculatorScreen.textContent.endsWith(".")) {
        isDecimalAdded = false;
    }
    calculatorScreen.textContent = calculatorScreen.textContent.substring(0, calculatorScreen.textContent.length - 1);
}

function resetScreen() {
    calculatorScreen.textContent = "0";
    isDecimalAdded = false;
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
