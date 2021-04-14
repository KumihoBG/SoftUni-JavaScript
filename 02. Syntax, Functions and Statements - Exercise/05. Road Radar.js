function roadRadar(speed, area) {
    let speedLimit = 0;
    let difference = 0;

    switch(area) {
        case 'city': 
        speedLimit = 50;
        difference = Math.abs(speed - speedLimit);
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let status = speedDifference(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        break;
        case 'residential': 
        speedLimit = 20;
        difference = Math.abs(speed - speedLimit);
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let status = speedDifference(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        break;
        case 'interstate': 
        speedLimit = 90;
        difference = Math.abs(speed - speedLimit);
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let status = speedDifference(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        break;
        case 'motorway': 
        speedLimit = 130;
        difference = Math.abs(speed - speedLimit);
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let status = speedDifference(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        break;
    }

    function speedDifference(result) {
        if (result <= 20) {
            return 'speeding';  
        } else if (result <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roadRadar(40, 'city');
console.log('---------');
roadRadar(21, 'residential');
console.log('---------');
roadRadar(120, 'interstate');
console.log('---------');
roadRadar(200, 'motorway');
