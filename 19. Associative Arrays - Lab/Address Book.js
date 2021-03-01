function addressBook(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');

        if(addressBook[name]){
            addressBook[name] = address;
        } else {
            addressBook[name] = address;
        }
    }
    let sorted = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, address] of sorted){
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);