function vehicle(){
    class Vehicle {
        constructor(type, model, parts, fuel){
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
        }
        parts = {
            engine: Number(engine),
            power: Number(power),
            quality: engine * fuel
        };

        drive(fuelLoss) {
            return fuel -= fuelLoss;
        }
    }

    let parts = { 
        engine: 6, 
        power: 100, 
        quality: engine * power,
    };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}

vehicle();