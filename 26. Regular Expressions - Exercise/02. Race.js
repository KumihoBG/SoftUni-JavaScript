function race(arr) {
    let participants = arr.shift().split(', ');
    let racer = {};
    let list = [];
    let totalDistance = 0;
    let patternOne = /[A-Za-z]+/g;
    let patternTwo = /[\d]/g;

    for (let line of arr) {
        if (line === "end of race") {
            break;
        }
        let name = line.match(patternOne).join('');
        let distance = line.match(patternTwo).map(Number).reduce((a, b) => (a + b), 0);
        if (participants.includes(name)) {
            if (!racer.hasOwnProperty(name)) {
                racer[name] = {
                    distance,
                }
            } else {
                let oldDistance = racer[name].distance;
                totalDistance += oldDistance;
                racer[name].distance = totalDistance;
            }
        }
    }
    let sorted = Object.entries(racer).sort((a, b) => b[1].distance - a[1].distance).splice(0, 3);

    for (let kvp of sorted) {
        let currentRacer = kvp[0];
        list.push(currentRacer);
    }

    console.log(`1st place: ${list[0]}`);
    console.log(`2nd place: ${list[1]}`);
    console.log(`3rd place: ${list[2]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);