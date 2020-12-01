function fishingBoat(arg1, arg2, arg3) {
    let groupBudjet = Number(arg1);
    let season = arg2;
    let fishersCount = Number(arg3);
    let pricePerSeason;

    switch (season) {
        case "Spring": pricePerSeason = 3000; break;
        case "Summer": 
        case "Autumn": pricePerSeason = 4200; break;
        case "Winter": pricePerSeason = 2600; break;
        default: break;
    }

    if (fishersCount <= 6) {
        pricePerSeason = pricePerSeason * 0.9;
    }
    else if (fishersCount >= 7 && fishersCount <= 11) {
        pricePerSeason = pricePerSeason * 0.85;
    }
    else if (fishersCount > 12) {
        pricePerSeason = pricePerSeason * 0.75;
    }

    if (fishersCount % 2 === 0 && season !== "Autumn") {
        pricePerSeason = pricePerSeason * 0.95;
    }

    let money = Math.abs(groupBudjet - pricePerSeason).toFixed(2);

    if (groupBudjet >= pricePerSeason) {
        console.log(`Yes! You have ${money} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${money} leva.`);
    }
}

fishingBoat("3000", "Summer", "11");
fishingBoat("3600", "Autumn", "6");
fishingBoat(2000, "Winter", 13);



