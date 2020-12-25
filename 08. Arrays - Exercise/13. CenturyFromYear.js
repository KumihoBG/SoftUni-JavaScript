function centuryFromYear(num) {
    let year = num;
    let century = 0;
    if (year/1000 < 1){
        century = Math.floor(year/100);
    } else {
        century = Math.ceil(year/100);
    }
    return century;
}

centuryFromYear(1905);
centuryFromYear(1700)