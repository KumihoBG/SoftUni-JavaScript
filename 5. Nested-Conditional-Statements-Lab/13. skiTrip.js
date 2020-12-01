function skipTrip(arg1, arg2, arg3) {
    let days = Number(arg1) - 1;
    let premise = arg2;
    let evaluation = arg3;
    let totalPrice = 0;

    switch (premise) {
        case "room for one person": totalPrice = days * 18; break;
        case "apartment": totalPrice = days * 25; break;
        case "president apartment": totalPrice = days * 35; break;       
        default:
            break;
    }

    if (days < 10){
        if (premise === "room for one person"){
            totalPrice = totalPrice;
        }
        else if (premise === "apartment"){
            totalPrice = totalPrice - (totalPrice * 0.3);
        }
        else if (premise === "president apartment"){
            totalPrice = totalPrice - (totalPrice * 0.1);
        }
    }
    else if (days >= 10 && days <= 15){
        if (premise === "room for one person"){
            totalPrice = totalPrice;
        }
        else if (premise === "apartment"){
            totalPrice = totalPrice - (totalPrice * 0.35);
        }
        else if (premise === "president apartment"){
            totalPrice = totalPrice - (totalPrice * 0.15);
        }
    }
    else if (days > 15){
        if (premise === "room for one person"){
            totalPrice = totalPrice;
        }
        else if (premise === "apartment"){
            totalPrice = totalPrice - (totalPrice * 0.5);
        }
        else if (premise === "president apartment"){
            totalPrice = totalPrice - (totalPrice * 0.2);
        }
    }

    if (evaluation === "positive"){
        totalPrice = totalPrice + totalPrice * 0.25;
    }
    else if (evaluation === "negative"){
        totalPrice = totalPrice - totalPrice * 0.1;
    }

    console.log(totalPrice.toFixed(2));
}

// skipTrip("14","apartment","positive");
// skipTrip("30","president apartment","negative");
// skipTrip("12","room for one person","positive");
skipTrip("2", "apartment", "positive");


