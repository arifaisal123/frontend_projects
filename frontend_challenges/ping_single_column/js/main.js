const inputField = document.getElementById("input-field");
const submitForm = document.querySelector(".user-input");
const errorType1 = document.getElementById("error1");
const errorType2 = document.getElementById("error2");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitForm.addEventListener("submit", function(event) {
    let userInput = inputField.value.trim();

    if (userInput === "") {
        event.preventDefault();
        errorType1.style.display = "block";
        errorType2.style.display = "none";
        inputField.style.borderColor = "red";
    }

    else if (!mailFormat.test(userInput)) {
        event.preventDefault();
        errorType1.style.display = "none";
        errorType2.style.display = "block";
        inputField.style.borderColor = "red";
    }
});