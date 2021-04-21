function cityRecords(input) {
    let towns = {};

    for (let line of input) {
        let [ town, population ] = line.split(' <-> ');
        population = Number(population);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = population; 
        } else {
            towns[town] += population;
        }
    }
    
    for (let kvp of Object.entries(towns)) {
        console.log(`${kvp[0]} : ${kvp[1]}`);
    }
}

cityRecords(
['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);


cityRecords(
['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);