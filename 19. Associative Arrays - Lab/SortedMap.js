function sortMap(){
    let numbers = new Map();
    numbers.set('Three', 3);
    numbers.set('One', 1);
    numbers.set('Two', 2);

    let mapEntries = Array.from(numbers.entries());
    let sortedMap = mapEntries.sort((a, b) => {
        return a[1] - b[1];
    })
    for (const kvp of sortedMap) {
        console.log(`${kvp[1]}`);
    }   
    
}

sortMap();