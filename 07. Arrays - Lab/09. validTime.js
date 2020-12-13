function validTime(str) {
    let result = false;
    str = str.split(':');
    const hours = Number(str[0]);
    const minutes = Number(str[1]);

    if ((hours > 0 && hours <= 24) && (minutes >= 0 && minutes <= 60)) {
        result = true;
        return result;
    } else {
        result = false;
        return result;
    }
}

validTime("13:58");