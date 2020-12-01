function metricConverter(arg1, arg2, arg3) {
    let number = Number(arg1);
    let metric = arg2;
    let converted = arg3;

    if (metric === "mm") {
        if (converted === "m"){
            number = number / 1000;
        }
        if (converted === "cm") {
            number = number / 10;
        }
    }
    else if (metric === "m"){
        if (converted === "cm"){
            number = number * 100;
        } else if (converted === "mm") {
            number = number * 1000;
        }
    }
    else if(metric === "cm"){
        if (converted === "mm"){
            number = number * 10;
        } else if (converted === "m") {
            number = number / 100;
        }  
    }
    console.log(number.toFixed(3))
}

metricConverter("45", "cm", "mm");
metricConverter("150", "m", "cm");
metricConverter("12", "mm", "m");
metricConverter("1201.34", "mm","cm");