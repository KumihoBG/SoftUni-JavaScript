function cinema(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);
    let income = 0;

    switch (type) {
        case "Premiere": income = (rows * columns) * 12; break;
        case "Normal": income = (rows * columns) * 7.5; break;
        case "Discount":income = (rows * columns) * 5; break;
        default:break;
    }
    console.log(income.toFixed(2));
}

cinema("Premiere","10","12");
cinema("Normal","21","13");
cinema("Discount","12","30");


