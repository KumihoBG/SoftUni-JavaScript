function timePlusMinutes(arg1, arg2) {
    let hour = Number(arg1);
    let minutes = Number(arg2);

    if (minutes <= 44) {
        minutesFinal = minutes + 15;
    }

    if (minutes >= 45) {
        hour = hour + 1;
        minutes = (60 - minutes);
        minutesFinal = Math.floor(15 - minutes);
    }

    if (hour == "24") {
        hour = 0;
    }

    if (minutesFinal < 10) {
        console.log(`${hour}:0${minutesFinal}`);
    } else {
        console.log(`${hour}:${minutesFinal}`);
    }
}

// timePlusMinutes("1", "46");
// timePlusMinutes("0", "01");
// timePlusMinutes("23", "59");
timePlusMinutes("11", "08");
timePlusMinutes("12", "49");