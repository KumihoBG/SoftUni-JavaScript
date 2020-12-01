function holiday(arg1, arg2) {
    let budjet = Number(arg1);
    let season = String(arg2);
    let destination;
    let holidayType;
    let amountSpent = 0;

    if(budjet <= 100){
        if (season === "summer"){
            amountSpent = budjet * 0.3;
            holidayType = "Camp";
        }
        else if (season === "winter") {
            amountSpent = budjet * 0.7;
            holidayType = "Hotel";
        }
        destination = "Bulgaria";
    }
    else if (budjet <= 1000){
        if (season === "summer"){
            amountSpent = budjet * 0.4;
            holidayType = "Camp";
        }
        else if (season === "winter") {
            amountSpent = budjet * 0.8;
            holidayType = "Hotel";
        }
        destination = "Balkans";
    }
    else if (budjet > 1000){
        amountSpent = budjet * 0.9;
        destination = "Europe";
        holidayType = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${amountSpent.toFixed(2)}`);
}

// holiday("50", "summer");
// holiday("75", "winter");
// holiday("312", "summer");
// holiday("678.53", "winter");
holiday("1500", "summer");
