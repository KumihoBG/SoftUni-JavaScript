function carFactory(obj) {
    let power = Number(obj.power);
    let engine = {};
    let car = {};
    car.model = obj.model;
    let small = Math.abs(power - 90);
    let normal = Math.abs(power - 120);
    let monster = Math.abs(power - 200);
    let resultOne = small < normal && small < monster;
    let resultTwo = normal < small && normal < monster;
    let resultThree = monster < small && monster < normal;
    let carriage = obj.carriage;
    let color = obj.color;
    let wheelsize = obj.wheelsize;
    let wheels = [1, 1, 1, 1];

    if (resultOne) {
        engine = {
            power: 90,
            volume: 1800,
        };
        car.engine = engine;
    } else if (resultTwo) {
        engine = {
            power: 120,
            volume: 2400,
        };
        car.engine = engine;
    } else if (resultThree) {
        engine = {
            power: 200,
            volume: 3500,
        };
        car.engine = engine;
    }

    if (carriage === "hatchback") {
        carriage = {
            type: "hatchback",
            color,
        }
        car.carriage = carriage;
    } else if (carriage === "coupe") {
        carriage = {
            type: "coupe",
            color,
        }
        car.carriage = carriage;
    }

    if (wheelsize % 2 != 0) {
        wheels.fill(wheelsize, 0);
        car.wheels = wheels;
    } else {
        wheelsize--;
        wheels.fill(wheelsize, 0);
        car.wheels = wheels;
    }
    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));