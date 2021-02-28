function solve(arrStr){
    let storage = new Map();

    arrStr.forEach(line => {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (storage.has(item)){
            let oldQuantity = storage.get(item);
            storage.set(item, oldQuantity + quantity);
        } else {
            storage.set(item, quantity);
        }
    });   

    // Standard printing
        // for (const key of storage.keys()) {
        //     console.log(`${key} -> ${storage.get(key)}`); 
        // }

    // KVP Printing = KEY VALUE PAIR
        for (const kvp of storage.entries()) {
            console.log(`${kvp[0]} -> ${kvp[1]}`);
        }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);