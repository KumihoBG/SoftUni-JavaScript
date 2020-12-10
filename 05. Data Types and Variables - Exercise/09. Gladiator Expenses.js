function gladiator(lostFights, helmetPrice , swordPrice, shieldPrice, armorPrice){
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;
    let expenses = 0;
    let lostCounterHelmets = 0;
    let lostCounterSwords = 0;
    let isBroken = false;

    for (let i = 1; i <= lostFights; i++){
        if (i % 2 == 0){
            trashedHelmet++;
            expenses += helmetPrice;
            lostCounterHelmets = i;
            isBroken = true;
        } else {
            isBroken = false;
        }
        if (i % 3 == 0){
            trashedSword++;
            expenses += swordPrice;
            lostCounterSwords = i;
            isBroken = true;
        } else {
            isBroken = false;
        }
        if (isBroken == true && lostCounterHelmets != 0 && lostCounterSwords != 0 
            && lostCounterHelmets == lostCounterSwords){
            trashedShield++;
            expenses += shieldPrice;
            if (trashedShield % 2 == 0){
                trashedArmor++;
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(7,
    2,
    3,
    4,
    5
    );

    gladiator(23,
        12.50,
        21.50,
        40,
        200
        );