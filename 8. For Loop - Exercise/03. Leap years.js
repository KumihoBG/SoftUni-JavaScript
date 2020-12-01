function leapYear(arg1, arg2) {
    let leap = Number(arg1);
    let year = Number(arg2);

    for (let i = leap; i <= year; i += 4) {
        console.log(i);
    }
}

leapYear("1908", "1919");
leapYear("2000","2011");

