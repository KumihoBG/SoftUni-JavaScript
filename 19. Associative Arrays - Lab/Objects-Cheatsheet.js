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
    let arrayFromObject = [];

    for (let contact of input) {
        let name = contact.split(' ')[0];
        let phone = contact.split(' ')[1];
        contacts[name] = phone;
    }
    // iteration of objects - for in only!
    for (const key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
        // Creates array from the object keys or values, or tuples 
        arrayFromObject = Array.from(Object.keys(contacts));
    }

    console.log(arrayFromObject);

    // Very important method which searches through the object's properties
    if (contacts.hasOwnProperty('Peter')) {
        console.log('Found');
    } else {
        console.log('Not Found!');
    }

    // Another way to search through the object's properties
    if (contacts['Peter']) {
        console.log('Found');
    } else {
        console.log('Not Found!');
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);