function spice(source) {
    source = Number(source);
    let sum = 0;
    let days = 0;

    while (source >= 100) {
        days++;
        sum += source - 26;
        source -= 10;
    }
    if (source < 100 && days == 0) {
        console.log(days);
        console.log(sum);
    }
    else {
        sum -= 26;
        console.log(days);
        console.log(sum);
    }
}

spice(450);

