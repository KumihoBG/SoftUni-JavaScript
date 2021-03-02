function piccolo(input){
    let parking = [];

    for (let car of input) {
        let [direction, carNumber] = car.split(', ');
        if (direction === "IN") {
            if (!parking.includes(carNumber)){
                parking.push(carNumber);
            }
        } else {
            if (parking.includes(carNumber)){
                parking.splice(parking.indexOf(carNumber), 1);
            }
        }

        if (parking.length === 0) {
            console.log('Parking Lot is Empty');
            break;
        }
    }
    let sorted = parking.sort((a, b) => a.localeCompare(b)).forEach(car => console.log(car));
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);