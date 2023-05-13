function calculate_age() {
    // Stores the input of the user
    const year = document.getElementById("year");
    const month = document.getElementById("month");
    const day = document.getElementById("day");   
    
    // Stores today's date using Date object
    const today = new Date();

    // Stores the currentYear, currentMonth, and currentDay using the Date object
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // getMonth() method is 0-indexed 
    const currentDay = today.getDate();

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
