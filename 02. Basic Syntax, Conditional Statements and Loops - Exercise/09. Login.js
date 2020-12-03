function login(input){
    let index = 0;
    let username = input[index++].toString();
    let usernameReverse = "";

    for (let i = username.length + 1; i >= 0; i--){
        usernameReverse += username.charAt(i);
    }

    let counter = 0;
    let inputName = input[index++];

    while (inputName !== usernameReverse){
        if(counter >= 3){
            console.log(`User ${username} blocked!`);
            break;
        }
        else if (inputName !== usernameReverse) {
            console.log("Incorrect password. Try again.");
            counter++;
        } else {
            console.log(`User ${username} logged in.`);
        }
        inputName = input[index++];
    }
    if (inputName === usernameReverse){
        console.log(`User ${username} logged in.`);
    }
}

login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
login(['momo','omom']);