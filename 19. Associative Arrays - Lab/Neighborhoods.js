function solve(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    while (input.length > 0) {
        let current = input.shift().split(' - ');
        let neighborhood = current[0];
        let person = current[1];
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(map)
        .sort((a, b) => { return b[1].length - a[1].length; });

    for (let neighborhood of sorted) {
        let neighborhoodName = neighborhood[0];
        let persons = neighborhood[1];
        console.log(`${neighborhoodName}: ${persons.length}`);
        for (let j = 0; j < persons.length; j++) {
            console.log(`--${persons[j]}`);
        }
    }
}

// Bright Mews: 2
// --Garry
// --Andrea
// Abbey Street: 1
// --Billy
// Herald Street: 0


solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);
