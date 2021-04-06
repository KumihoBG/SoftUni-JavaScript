function circleArea(input) {
    let isNum = isNaN(input);

    if (input !== true && !isNum) {
        let circleArea = Math.PI * (input * input)
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

circleArea(5);
circleArea('name')
circleArea(22);
circleArea(true)
