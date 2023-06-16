const billInput = document.getElementById("bill");
const gridButtons = document.querySelectorAll(".grid-button");
const customInput = document.querySelector(".grid-custom");
const peopleNumberInput = document.getElementById("people-number");
const zeroInput = document.getElementById("zero"); 
const tipAmountSpan = document.getElementById("tip-amount-dollar");
const totalAmountSpan = document.getElementById("total-tip-dollar");
const resetButton = document.querySelector("button");

let billValue;
let tipPercentage;
let peopleNumber;
let tipAmount;
let totalAmount;

billInput.addEventListener("change", () => {
    billValue = billInput.value;
    calculateTip();
});

gridButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        tipPercentage = undefined;
      } else {
        gridButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        tipPercentage = button.textContent;
        calculateTip();
      }
    });
  });

customInput.addEventListener("click", () => {
    gridButtons.forEach((btn) => btn.classList.remove("active"));
});

customInput.addEventListener("input", () => {
    tipPercentage = customInput.value;
    calculateTip();
});

peopleNumberInput.addEventListener("change", () => {
    if (peopleNumberInput.value === "0") {
        zeroInput.style.display = "block";
    }
    else {
        peopleNumber = peopleNumberInput.value;
        calculateTip();
        zeroInput.style.display = "none";
    }
});

resetButton.addEventListener("click", () => {
    billInput.value = "";
    gridButtons.forEach((button) => button.classList.remove("active"));
    customInput.value = "";
    peopleNumberInput.value = "";
    zeroInput.style.display = "none";
    billValue = undefined;
    tipPercentage = undefined;
    peopleNumber = undefined;
    tipAmountSpan.innerHTML = "$0.00";
    totalAmountSpan.innerHTML = "$0.00";
  });

function calculateTip() {
    if (billValue && tipPercentage && peopleNumber) {
        tipAmount = parseFloat(billValue) * (parseInt(tipPercentage) / (100 * parseInt(peopleNumber)));
        totalAmount = (parseFloat(billValue) / parseInt(peopleNumber)) + tipAmount;

        tipAmount = tipAmount.toFixed(2);
        totalAmount = totalAmount.toFixed(2);

        tipAmountSpan.innerHTML = `$${tipAmount}`;
        totalAmountSpan.innerHTML = `$${totalAmount}`;
    }
}
