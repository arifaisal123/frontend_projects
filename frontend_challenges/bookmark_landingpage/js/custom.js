const bookmarkingButton = document.getElementById("simpleBookmarkingButton");
const searchingButton = document.getElementById("speedySearchingButton");
const sharingButton = document.getElementById("easySharingButton");
const carouselItem1 = document.getElementById("carouselItem1");
const carouselItem2 = document.getElementById("carouselItem2");
const carouselItem3 = document.getElementById("carouselItem3");
const featuresOne = document.getElementById("featuresOneContainer");
const featuresTwo = document.getElementById("featuresTwoContainer");
const featuresThree = document.getElementById("featuresThreeContainer");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navbarContent = document.getElementById("navbarSupportedContent");
const crossButton = document.getElementById("crossButton");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const emailErrorMessage = document.getElementById("emailErrorMessage");
const emailSubmitButton = document.getElementById("emailSubmitButton");
const emailInput = document.getElementById("emailInput");


bookmarkingButton.addEventListener("click", () => {
    searchingButton.classList.remove("border-bottom-soft-red");
    sharingButton.classList.remove("border-bottom-soft-red");
    featuresTwo.classList.add("d-none");
    featuresThree.classList.add("d-none");

    bookmarkingButton.classList.add("border-bottom-soft-red");
    featuresOne.classList.remove("d-none");
});

searchingButton.addEventListener("click", () => {
    sharingButton.classList.remove("border-bottom-soft-red");
    bookmarkingButton.classList.remove("border-bottom-soft-red");
    featuresOne.classList.add("d-none");
    featuresThree.classList.add("d-none");

    searchingButton.classList.add("border-bottom-soft-red");
    featuresTwo.classList.remove("d-none");
});

sharingButton.addEventListener("click", () => {
    searchingButton.classList.remove("border-bottom-soft-red");
    bookmarkingButton.classList.remove("border-bottom-soft-red");
    featuresOne.classList.add("d-none");
    featuresTwo.classList.add("d-none");

    sharingButton.classList.add("border-bottom-soft-red");
    featuresThree.classList.remove("d-none");
});

hamburgerMenu.addEventListener("click", () => {
    navbarContent.classList.add("show");
    navbarContent.classList.add("mobile-menu");
});

crossButton.addEventListener("click", () => {
    navbarContent.classList.remove("show");
    navbarContent.classList.remove("mobile-menu");
});

emailSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    validateEmail(emailInput.value);
});

function validateEmail(email) {
    if (!emailRegex.test(email)) {
        emailErrorMessage.classList.remove("d-none");
        emailInput.style.borderWidth = "4px";
        emailInput.style.borderColor = "hsl(0, 94%, 66%)";
    } else {
        emailErrorMessage.classList.add("d-none");
        this.submit();
    }
}
