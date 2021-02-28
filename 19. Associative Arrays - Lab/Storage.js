function solve(arrStr){
    let storage = new Map();

    arrStr.forEach(line => {
        let [items, quantity] = line.split(' ');
        storage.set(items, quantity);
    });   

    console.log(storage);
    // console.log(`${storage.get(items)} -> ${storage.get(quantity)}`); 
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);