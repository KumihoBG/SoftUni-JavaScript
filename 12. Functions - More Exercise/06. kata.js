function mxdiflg(a1, a2) {
    let result = 0;
    let arrayOne = a1;
    let arrayTwo = a2;
    let x = Number(a1.length);
    let y = Number(a2.length);

    if (arrayOne.length == 0) {
        return -1;
    } else if (arrayTwo.length == 0) {
        return -1;
    } else {
        result = Math.abs(x + y);
    }
    return result.toString();
}

mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]);