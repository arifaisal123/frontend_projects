const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");   

// Stores today's date using Date object
const today = new Date();

// Stores the currentYear, currentMonth, and currentDay using the Date object
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // getMonth() method is 0-indexed 
const currentDay = today.getDate();

// Event Listeners
year.addEventListener("focus", function() { 
    validation("year");
});
year.addEventListener("blur", function() {
    validation("year");
});
month.addEventListener("focus", function() {
    validation("month");
});
month.addEventListener("blur", function() {
    validation("month");
});
day.addEventListener("focus", function() {
    validation("day");
});
day.addEventListener("blur", function() {
    validation("day")
});


// Checks input for valid date (1<=day<=31, 1<=month<=12, 1<=year<=current_year)
function validation(datatype) {
    if (datatype === "day")
    {
        if (day.value === "") 
        {
            document.getElementById("validation_day").style.visibility = "visible";
            document.getElementById("label_day").style.color = "rgb(236, 30, 30)";
            document.getElementById("day").style.borderColor = "rgb(236, 30, 30)";
        }
        else if (day.value < 1 || day.value > 31)
        {
            document.getElementById("validation_day").style.visibility = "visible";
            document.getElementById("validation_day").innerHTML = "Must be a valid day";
            document.getElementById("label_day").style.color = "rgb(236, 30, 30)";
            document.getElementById("day").style.borderColor = "rgb(236, 30, 30)";
        }
        else
        {
            document.getElementById("validation_day").style.visibility = "hidden";
            document.getElementById("label_day").style.color = "#969696";
            document.getElementById("day").style.borderColor = "#969696";
        }
    } 
    else if (datatype === "month")
    {
        if (month.value === "") 
        {
            document.getElementById("validation_month").style.visibility = "visible";
            document.getElementById("label_month").style.color = "rgb(236, 30, 30)";
            document.getElementById("month").style.borderColor = "rgb(236, 30, 30)";
        }
        else if (month.value < 1 || month.value > 12)
        {
            document.getElementById("validation_month").style.visibility = "visible";
            document.getElementById("validation_month").innerHTML = "Must be a valid month";
            document.getElementById("label_month").style.color = "rgb(236, 30, 30)";
            document.getElementById("month").style.borderColor = "rgb(236, 30, 30)";
        }
        else
        {
            document.getElementById("validation_month").style.visibility = "hidden";
            document.getElementById("label_month").style.color = "#969696";
            document.getElementById("month").style.borderColor = "#969696";
        }
    }
    else if (datatype === "year")
    {
        if (year.value === "") 
        {
            document.getElementById("validation_year").style.visibility = "visible";
            document.getElementById("label_year").style.color = "rgb(236, 30, 30)";
            document.getElementById("year").style.borderColor = "rgb(236, 30, 30)";
        }
        else if (year.value < 1 || year.value > currentYear)
        {
            document.getElementById("validation_year").style.visibility = "visible";
            document.getElementById("validation_year").innerHTML = "Must be a valid year";
            document.getElementById("label_year").style.color = "rgb(236, 30, 30)";
            document.getElementById("year").style.borderColor = "rgb(236, 30, 30)";
        }
        else
        {
            document.getElementById("validation_year").style.visibility = "hidden";
            document.getElementById("label_year").style.color = "#969696";
            document.getElementById("year").style.borderColor = "#969696";
        }
    }
}

// Resets circle color back to original when in non-focus mode
function resetCircleColor() {
    const purpleCircle = document.getElementById("circle");
    purpleCircle.style.backgroundColor = "#7D50FA";
    purpleCircle.style.borderColor = "#7D50FA";
}

// Resets circle color back to black when in focus mode
function changeCircleColor() {
    const purpleCircle = document.getElementById("circle");
    purpleCircle.style.backgroundColor = "#000";
    purpleCircle.style.borderColor = "#000";
}

// Calculates age based on user input
function calculateAge() {  
    // Defines variables for calculations
    let calculatedYear, calculatedMonth, calculatedDay;

    // Checks if all three input has been completed
    if (day.value && month.value && year.value)
    {
        if (month.value > currentMonth)
        {
            calculatedYear = (currentYear - 1) - year.value;
            calculatedMonth = month.value - currentMonth;
            calculatedDay = currentDay; 
        }
        else
        {
            calculatedYear = currentYear - year.value;
            calculatedMonth = currentMonth - month.value;
            calculatedDay = currentDay;
        }

        // Changes the date from "--" to the calculated value
        document.getElementById("age_number_years").innerHTML = calculatedYear;
        document.getElementById("age_number_months").innerHTML = calculatedMonth;
        document.getElementById("age_number_days").innerHTML = calculatedDay;
    }
}
