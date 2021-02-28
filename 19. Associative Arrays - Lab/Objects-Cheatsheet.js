// Iteration through objects and associative arrays
function solve(input) {
    let contacts = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        // assigning key and value to the empty object
        contacts[name] = phone;
    }
    // Accessing all object's keys and printing them plus their values
    Object.keys(contacts).forEach(key => console.log(`${key} -> ${contacts[key]}`));
}

function solve(input) {
    let contacts = {};
    for (let contact of input){
        let name = contact.split(' ')[0];
        let phone = contact.split(' ')[1];
        contacts[name] = phone;
    }
    // iteration of objects - for in only!
    for (const key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
    }
}