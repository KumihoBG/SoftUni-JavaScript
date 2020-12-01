function flowers(arg1, arg2, arg3) {
    let typeFlowers = arg1;
    let flowersCount = Number(arg2);
    let budjet = Number(arg3);
    let expenses = 0;

    switch (typeFlowers) {
        case "Roses": expenses = flowersCount * 5; break;
        case "Dahlias": expenses = flowersCount * 3.8; break;
        case "Tulips": expenses = flowersCount * 2.8; break;
        case "Narcissus": expenses = flowersCount * 3; break;
        case "Gladiolus": expenses = flowersCount * 2.5; break;
        default:
            break;
    }
    if (typeFlowers === "Roses" && flowersCount > 80) {
        expenses = expenses - expenses * 0.1;
    }
    else if (typeFlowers === "Dahlias" && flowersCount > 90) {
        expenses = expenses - expenses * 0.15;
    }
    else if (typeFlowers === "Tulips" && flowersCount > 80) {
        expenses = expenses - expenses * 0.15;
    }
    else if (typeFlowers === "Narcissus" && flowersCount < 120) {
        expenses = expenses + expenses * 0.15;
    }
    else if (typeFlowers === "Gladiolus" && flowersCount < 80) {
        expenses = expenses + expenses * 0.2;
    }

    if (budjet >= expenses) {
        let amountLeft = budjet - expenses;
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${amountLeft.toFixed(2)} leva left.`);
    }
    else if (expenses > budjet) {
        let amountNeeded = expenses - budjet;
        console.log(`Not enough money, you need ${amountNeeded.toFixed(2)} leva more.`);
    }
}

// flowers("Roses", "55", "250");
flowers("Tulips", "88", "260");
// flowers("Narcissus", 119, 360);


