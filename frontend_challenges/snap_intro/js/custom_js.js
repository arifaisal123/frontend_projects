const openMenuButton = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("menu-close-button");
const navBar = document.getElementById("navbarToggleExternalContent");
const navList = document.getElementById("nav-list-block");
const navFeatures = document.getElementById("nav-features");
const navCompany = document.getElementById("nav-company");
const featureLinks = document.querySelectorAll(".feature-link");
const companyLinks = document.querySelectorAll(".company-link");
const upArrow1 = document.getElementById("up-arrow-1");
const upArrow2 = document.getElementById("up-arrow-2");
const downArrow1 = document.getElementById("down-arrow-1");
const downArrow2 = document.getElementById("down-arrow-2");


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

navFeatures.addEventListener("click", function() {
    if (downArrow1.classList.contains("d-none")) {
        upArrow1.classList.add("d-none");
        downArrow1.classList.remove("d-none");

        featureLinks.forEach(featureLink => {
        featureLink.classList.add("d-none");
        });
    }
    else {
        upArrow1.classList.remove("d-none");
        downArrow1.classList.add("d-none");

        featureLinks.forEach(featureLink => {
        featureLink.classList.remove("d-none");
        });
    }
});

navCompany.addEventListener("click", function() {
    if (downArrow2.classList.contains("d-none")) {
        upArrow2.classList.add("d-none");
        downArrow2.classList.remove("d-none");

        companyLinks.forEach(companyLink => {
        companyLink.classList.add("d-none");
        });
    }
    else {
        upArrow2.classList.remove("d-none");
        downArrow2.classList.add("d-none");

        companyLinks.forEach(companyLink => {
        companyLink.classList.remove("d-none");
        });
    }
});
