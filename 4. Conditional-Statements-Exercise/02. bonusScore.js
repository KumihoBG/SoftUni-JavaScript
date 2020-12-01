function bonusSystem(arg1) {
    let initialPoints = Number(arg1);
    let bonusPoints = 0.0;
    if (initialPoints <= 100) {
        bonusPoints = 5;
    }
    else if (initialPoints > 100 && initialPoints < 1000){
        bonusPoints = initialPoints - (initialPoints * 0.8);    
    }
    else if (initialPoints >= 1000) {
        bonusPoints = initialPoints - (initialPoints * 0.9);
    }

    if (initialPoints % 2 === 0){
        bonusPoints = bonusPoints + 1;
    }
    else if (initialPoints % 10 === 5){
        bonusPoints = bonusPoints + 2;
    }

    let finalPoints = initialPoints + bonusPoints;
    console.log(bonusPoints.toFixed(1), finalPoints.toFixed(1));
}

// bonusSystem("20");
// bonusSystem("175");
// bonusSystem("2703");
bonusSystem("15875");

