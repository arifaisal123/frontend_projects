const openMenuButton = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("menu-close-button");

const navBar = document.getElementById("navbarToggleExternalContent");
const navList = document.getElementById("nav-list-block");

const navFeatures1 = document.getElementById("nav-features1");
const navFeatures2 = document.getElementById("nav-features2");
const navCompany1 = document.getElementById("nav-company1");
const navCompany2 = document.getElementById("nav-company2");

const featureLinks = document.querySelectorAll(".feature-link");
const companyLinks = document.querySelectorAll(".company-link");

const upArrow11 = document.getElementById("up-arrow-11");
const upArrow12 = document.getElementById("up-arrow-12");
const upArrow21 = document.getElementById("up-arrow-21");
const upArrow22 = document.getElementById("up-arrow-22");

const downArrow11 = document.getElementById("down-arrow-11");
const downArrow12 = document.getElementById("down-arrow-12");
const downArrow21 = document.getElementById("down-arrow-21");
const downArrow22 = document.getElementById("down-arrow-22");


openMenuButton.addEventListener("click", function() {
    closeMenuButton.style.display = "block";
    navBar.style.display = "flex";
    navList.style.display = "flex";
});

closeMenuButton.addEventListener("click", function() {
    closeMenuButton.style.display = "none";
    navBar.style.display = "none";
    navList.style.display = "none";
});

navFeatures1.addEventListener("click", function() {
    if (downArrow11.classList.contains("d-none")) {
        upArrow11.classList.add("d-none");
        downArrow11.classList.remove("d-none");

        featureLinks.forEach(featureLink => {
        featureLink.classList.add("d-none");
        });
    }
    else {
        upArrow11.classList.remove("d-none");
        downArrow11.classList.add("d-none");

        featureLinks.forEach(featureLink => {
        featureLink.classList.remove("d-none");
        });
    }
});

navFeatures2.addEventListener("click", function() {
    if (downArrow21.classList.contains("d-none")) {
        upArrow21.classList.add("d-none");
        downArrow21.classList.remove("d-none");

        featureLinks.forEach(featureLink => {
        featureLink.classList.add("d-none");
        });
    }
    else {
        upArrow21.classList.remove("d-none");
        downArrow21.classList.add("d-none");

        featureLinks.forEach(featureLink => {
        featureLink.classList.remove("d-none");
        });
    }
});

navCompany1.addEventListener("click", function() {
    if (downArrow12.classList.contains("d-none")) {
        upArrow12.classList.add("d-none");
        downArrow12.classList.remove("d-none");

        companyLinks.forEach(companyLink => {
        companyLink.classList.add("d-none");
        });
    }
    else {
        upArrow12.classList.remove("d-none");
        downArrow12.classList.add("d-none");

        companyLinks.forEach(companyLink => {
        companyLink.classList.remove("d-none");
        });
    }
});

navCompany2.addEventListener("click", function() {
    if (downArrow22.classList.contains("d-none")) {
        upArrow22.classList.add("d-none");
        downArrow22.classList.remove("d-none");

        companyLinks.forEach(companyLink => {
        companyLink.classList.add("d-none");
        });
    }
    else {
        upArrow22.classList.remove("d-none");
        downArrow22.classList.add("d-none");

        companyLinks.forEach(companyLink => {
        companyLink.classList.remove("d-none");
        });
    }
});
