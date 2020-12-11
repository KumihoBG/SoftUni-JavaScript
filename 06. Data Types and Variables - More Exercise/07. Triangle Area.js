function triangleArea(){
    let input = arguments;
    let sideA = Number(arguments[0]);
    let sideB = Number(arguments[1]);
    let sideC = Number(arguments[2]);
    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let formula = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    console.log(formula);
}

triangleArea(2, 3.5, 4);