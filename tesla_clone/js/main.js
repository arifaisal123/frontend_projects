// Open the side navigation menu when menu button is clicked
const openMenu = () => {
    $(".backdrop").addClass("active");
    $("aside").addClass("active");
}

// Close the side navigation menu when close button is clicked
const closeMenu = () => {
    $(".backdrop").removeClass("active");
    $("aside").removeClass("active");
}

// Click event handler for menu button
$("#menuBtn").on("click", (event) => {
    // Prevent default reloading of webpage after click
    event.preventDefault();
    openMenu();
});

// Click event handler for close button
$(".close").on("click", (event) => {
    closeMenu();
});

// Click event handler for backdrop class(whole blurred background)
$(".backdrop").on("click", (event) => {
    closeMenu();
});

let lastScrollPosition = 0;
let lastCentered = 0;
let onWayTo = null;

document.addEventListener("scroll", () => {
    const direction = window.pageYOffset - lastScrollPosition > 0 ? "down" : "up";
    const sections = document.querySelectorAll("section");

    if (onWayTo === null) {
        const destinationIndex = direction === "up" ? lastCentered - 1 : lastCentered + 1;

        if (destinationIndex >= 0 && destinationIndex < sections.length) {
            onWayTo = destinationIndex;
            window.scroll(0, sections[destinationIndex].offsetTop);
        }
    }

    sections.forEach((section, index) => {
        if (window.pageYOffset === section.offsetTop) {
            lastCentered = index;
            // section.className = "active";
            section.classList.add("active");

            if (onWayTo === index) {
                onWayTo = null;
            }
        } else {
            // section.className = "";
            section.classList.remove("active");
        }
    });
    lastScrollPosition = window.pageYOffset;
});