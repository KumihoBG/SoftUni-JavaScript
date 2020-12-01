function summerOutfit(arg1, arg2) {
    let degrees = Number(arg1);
    let time = arg2;
    let clothing;
    let shoes;

    if (time === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            clothing = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (degrees > 18 && degrees <= 24) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees >= 25) {
            clothing = "T-Shirt";
            shoes = "Sandals";
        }
    }
    else if (time === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees > 18 && degrees <= 24) {
            clothing = "T-Shirt";
            shoes = "Sandals";
        }
        else if (degrees >= 25) {
            clothing = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    else if (time === "Evening") {
        if (degrees >= 10 && degrees <= 18) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees > 18 && degrees <= 24) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees >= 25) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`);
}

// summerOutfit("16","Morning");
// summerOutfit("22","Afternoon");
summerOutfit("28","Evening");


