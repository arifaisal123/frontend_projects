const bookmarkingButton = document.getElementById("simpleBookmarkingButton");
const searchingButton = document.getElementById("speedySearchingButton");
const sharingButton = document.getElementById("easySharingButton");
const carouselItem1 = document.getElementById("carouselItem1");
const carouselItem2 = document.getElementById("carouselItem2");
const carouselItem3 = document.getElementById("carouselItem3");
const featuresOne = document.getElementById("featuresOneContainer");
const featuresTwo = document.getElementById("featuresTwoContainer");
const featuresThree = document.getElementById("featuresThreeContainer");


bookmarkingButton.addEventListener("click", () => {
    searchingButton.classList.remove("border-bottom-lg-soft-red");
    sharingButton.classList.remove("border-bottom-lg-soft-red");
    featuresTwo.classList.add("d-none");
    featuresThree.classList.add("d-none");

    bookmarkingButton.classList.add("border-bottom-lg-soft-red");
    featuresOne.classList.remove("d-none");
});

searchingButton.addEventListener("click", () => {
    sharingButton.classList.remove("border-bottom-lg-soft-red");
    bookmarkingButton.classList.remove("border-bottom-lg-soft-red");
    featuresOne.classList.add("d-none");
    featuresThree.classList.add("d-none");

    searchingButton.classList.add("border-bottom-lg-soft-red");
    featuresTwo.classList.remove("d-none");
});

sharingButton.addEventListener("click", () => {
    searchingButton.classList.remove("border-bottom-lg-soft-red");
    bookmarkingButton.classList.remove("border-bottom-lg-soft-red");
    featuresOne.classList.add("d-none");
    featuresTwo.classList.add("d-none");

    sharingButton.classList.add("border-bottom-lg-soft-red");
    featuresThree.classList.remove("d-none");
});
