function distance(x1, y1, x2, y2){
    let firstPoint = x2-x1;
    let secondPoint = y2 - y1;
    let powerOne = Math.pow(firstPoint, 2);
    let powerTwo = Math.pow(secondPoint, 2);
    let distance = Math.sqrt(powerOne + powerTwo);
    console.log(distance);
}

distance(2, 4, 5, 0);
distance(2.34, 15.66, -13.55, -2.9985);