const openMenuButton = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("menu-close-button");
const navBar = document.getElementById("nav-bar");
const navList = document.getElementById("nav-list");

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
