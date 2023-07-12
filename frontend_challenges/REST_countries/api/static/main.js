// Toggle button for light and dark mode
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


// $("#region-filter").on("change", function() {
$("#region-filter").on("change", function() {
    const selectedRegion = $("#region-filter").val();

    // When no filter is selected
    if (!selectedRegion) {
        $(".main-data-link").removeClass("d-none");
        $(".filter-africa").addClass("d-none");
        $(".filter-americas").addClass("d-none");
        $(".filter-asia").addClass("d-none");
        $(".filter-europe").addClass("d-none");
        $(".filter-oceania").addClass("d-none");
        $(".custom-country").addClass("d-none");
    } else if (selectedRegion === "Africa") {
        // When Africa is selected
        if ($(".layout-container").hasClass("dark-mode")) {                                      // Dark mode 
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;

                $(".main-data-link").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-africa col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card dark-mode bg-dark-mode-element dark-mode-text country-card-dark" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {                                                               // Light mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;

                $(".main-data-link").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-africa col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card country-card-light" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }      
    } else if (selectedRegion === "Americas") {
        // When America is selected 
        if ($(".layout-container").hasClass("dark-mode")) {                                   // Dark mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;

                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-americas col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card dark-mode bg-dark-mode-element dark-mode-text country-card-dark" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {                                                                // Light mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
    
                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-americas col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card country-card-light" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }
    } else if (selectedRegion === "Asia") {
        // When Asia is selected
        if ($(".layout-container").hasClass("dark-mode")) {                                                     // Dark mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
    
                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-asia col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card dark-mode bg-dark-mode-element dark-mode-text country-card-dark" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {                                                                                        // Light mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
    
                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-asia col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card country-card-light" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }   
    } else if (selectedRegion === "Europe") {
        // When Europe is selected
        if ($(".layout-container").hasClass("dark-mode")) {                                                            // Dark mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;

                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-europe col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card dark-mode bg-dark-mode-element dark-mode-text country-card-dark" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {                                                                                                 // Light mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
    
                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-europe col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card country-card-light" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }   
    } else if (selectedRegion === "Oceania") {
        // When Oceania is selected
        if ($(".layout-container").hasClass("dark-mode")) {                                                                  // Dark mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;

                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-oceania col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card dark-mode bg-dark-mode-element dark-mode-text country-card-dark" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {                                                                                                    // Light mode
            fetch(`/filter?region=${selectedRegion}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
    
                $(".main-data-link").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".custom-country").addClass("d-none");
                filteredData.forEach((item, index) => {
                    const html = `<a class="filter-oceania col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                    <div class="card mx-auto mb-5 country-card country-card-light" style="width: 18rem;">
                                        <div class="flag-img">
                                            <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                            <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                            <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                            <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                        </div>
                                    </div>
                                </a>`;
                    $(".filter-container").append(html);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } 
    }
});

// Functionality for filtering items based on country name [WIP]
$("#input-text").on("input", function() {
    const selectedCountry = $("#input-text").val();

    if (!selectedCountry) {
        $(".main-data-link").removeClass("d-none");
        $(".filter-africa").addClass("d-none");
        $(".filter-americas").addClass("d-none");
        $(".filter-asia").addClass("d-none");
        $(".filter-europe").addClass("d-none");
        $(".filter-oceania").addClass("d-none");
        $(".custom-country").addClass("d-none");
    } else {
        if ($(".layout-container").hasClass("dark-mode")) {                                      // Dark mode 
            fetch(`/filter?country=${selectedCountry}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
                console.log(filteredData);

                $(".main-data-link").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".custom-country").addClass("d-none");

                filteredData.forEach((item, index) => {
                    if ($(".filter-container").find(`.custom-country-${item.name.toLowerCase()}`).length > 0) {
                        $(`.custom-country-${item.name.toLowerCase()}`).removeClass("d-none");
                    } else {
                        const html = `<a class="custom-country custom-country-${item.name.toLowerCase()} col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                        <div class="card mx-auto mb-5 country-card dark-mode bg-dark-mode-element dark-mode-text country-card-dark" style="width: 18rem;">
                                            <div class="flag-img">
                                                <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                                <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                                <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                                <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                            </div>
                                        </div>
                                    </a>`;
                        $(".filter-container").append(html);
                    }
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {                                                                // Light mode
            fetch(`/filter?country=${selectedCountry}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filtered_data;
                console.log(filteredData);

                $(".main-data-link").addClass("d-none");
                $(".filter-americas").addClass("d-none");
                $(".filter-asia").addClass("d-none");
                $(".filter-europe").addClass("d-none");
                $(".filter-oceania").addClass("d-none");
                $(".filter-africa").addClass("d-none");
                $(".custom-country").addClass("d-none");

                filteredData.forEach((item, index) => {
                    if ($(".filter-container").find(`.custom-country-${item.name.toLowerCase()}`).length > 0) {
                        $(`.custom-country-${item.name.toLowerCase()}`).removeClass("d-none");
                    } else {
                        const html = `<a class="custom-country custom-country-${item.name.toLowerCase()} col-12 col-lg-3 px-0 text-decoration-none text-color-black filtered-data-link" href="/${item.name}">
                                        <div class="card mx-auto mb-5 country-card country-card-light" style="width: 18rem;">
                                            <div class="flag-img">
                                                <img src="${item.flags.png}" class="card-img-top h-180px filtered-data-img" alt="country flags">
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title fw-800 filtered-data-heading">${item.name}</h5>
                                                <p class="filtered-data-population"><strong>Population:</strong> ${item.population}</p>
                                                <p class="filtered-data-region"><strong>Region:</strong> ${item.region}</p>
                                                <p class="filtered-data-capital"><strong>Capital</strong> ${item.capital}</p>
                                            </div>
                                        </div>
                                    </a>`;
                        $(".filter-container").append(html);
                    }
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }
    }
});

