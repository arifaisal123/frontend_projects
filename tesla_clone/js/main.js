const openMenu = () => {
    $(".backdrop").addClass("active");
    $("aside").addClass("active");
}

const closeMenu = () => {
    $(".backdrop").removeClass("active");
    $("aside").removeClass("active");
}

$("#menuBtn").on("click", (event) => {
    event.preventDefault();
    openMenu();
});

$(".close").on("click", (event) => {
    closeMenu();
});

$(".backdrop").on("click", (event) => {
    closeMenu();
});