function titles(arg1, arg2) {
    let age = Number(arg1);
    let sex = arg2;

    if (sex === "m"){
        if(age >= 16){
            console.log('Mr.');
        }
        else if (age < 16) {
            console.log('Master');
        }
    }
    else if(sex === "f"){
        if(age >= 16){
            console.log('Ms.');
        }
        else if (age < 16) {
            console.log('Miss');
        }
    }
}

titles("12","f");
titles("17","m");
titles("25","f");
titles("13.5","m");



