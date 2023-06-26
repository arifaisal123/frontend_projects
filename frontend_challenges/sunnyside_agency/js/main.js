const navbarContent = document.getElementById("navbarContent");
const menuBtn = document.getElementById("toggleButton");
const nav = document.querySelector(".navbar-nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        navbarContent.classList.remove("visually-hidden");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));
        showMenu = true;
    }
    else 
    {
        navbarContent.classList.add("visually-hidden");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));
        showMenu = false;
    }
}