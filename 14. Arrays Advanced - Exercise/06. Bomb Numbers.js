function bombNus(array, detonation) {
    while (array.includes(detonation[0])) {
        let bombPosition = array.indexOf(detonation[0]);
        let bombPower = detonation[1];
        let index = bombPosition - bombPower;

        if (index < 0) {
            index = 0;
        } 
        array.splice(bombPosition, bombPower + 1);
        array.splice(index, bombPower);
    }
    let result = array.reduce((acc, val) => acc + val, 0);
    return result;

}

console.log(bombNus([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNus([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNus([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
console.log(bombNus([1, 7, 7, 1, 2, 3], [7, 1]));