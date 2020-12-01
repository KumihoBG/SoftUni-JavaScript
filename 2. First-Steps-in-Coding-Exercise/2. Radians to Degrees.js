function toDegrees(arg1) {
    let radians = Number(arg1);
    let pi = Math.PI;
    let degrees = radians * 180 / pi;
    console.log(degrees.toFixed(0));
}

toDegrees("0.5236");