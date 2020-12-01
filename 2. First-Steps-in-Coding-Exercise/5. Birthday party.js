function birthdayParty(arg1){
    let cake = (arg1 * 20)/100;
    let percentage = 45/100;
    let drinks = cake - cake * percentage;
    let animator = arg1/3;
    let budjet = (parseFloat(arg1) + parseFloat(cake) + parseFloat(drinks) + parseFloat(animator));
    console.log(budjet);
}

birthdayParty("3720");