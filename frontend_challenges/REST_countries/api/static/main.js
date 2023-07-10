$(".toggle-button").on("click", function() {
    if ($(".layout-container").hasClass("dark-mode")) {
        // Activate light mode
        $(".layout-container").removeClass("dark-mode bg-dark-mode-body dark-mode-text");
        $(".layout-nav").removeClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".country-card").removeClass("dark-mode bg-dark-mode-element dark-mode-text country-card-dark");
        $(".country-card").addClass("country-card-light");
        $(".country-search-input").removeClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".country-search-input").removeClass("country-search-input-dark");
        $(".country-search-input").addClass("country-search-input-light");
        $(".country-search-input").css("background-image", "url('./static/search-light.png')");
        $(".region-filter-input").removeClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".region-filter-input").css("background-image", "url('./static/down-arrow-light.png')");
        $(".nav-text-darkmode").addClass("text-color-black");
        $(".crescent-moon").attr("src", "../static/light-mode.png");
        $(".back-button").removeClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".back-button").css("background-image", "url('./static/left-arrow-light.png')");
        $(".footer-link").removeClass("color-orange");
    } else {
        // Activate dark mode
        $(".layout-container").addClass("dark-mode bg-dark-mode-body dark-mode-text");
        $(".layout-nav").addClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".country-card").removeClass("country-card-light");
        $(".country-card").addClass("dark-mode bg-dark-mode-element dark-mode-text country-card-dark");
        $(".country-search-input").addClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".country-search-input").removeClass("country-search-input-light");
        $(".country-search-input").addClass("country-search-input-dark");
        $(".country-search-input").css("background-image", "url('./static/search-dark.png')");
        $(".region-filter-input").addClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".region-filter-input").css("background-image", "url('./static/down-arrow-dark.png')");
        $(".nav-text-darkmode").removeClass("text-color-black");
        $(".crescent-moon").attr("src", "../static/dark-mode.png");
        $(".back-button").addClass("dark-mode bg-dark-mode-element dark-mode-text");
        $(".back-button").css("background-image", "url('./static/left-arrow-dark.png')");
        $(".footer-link").addClass("color-orange");
    }
});