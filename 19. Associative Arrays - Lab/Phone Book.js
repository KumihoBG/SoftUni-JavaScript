function solve(input) {
    let contacts = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        contacts[name] = phone;
    }
    Object.keys(contacts).forEach(key => console.log(`${key} -> ${contacts[key]}`));
}

function solve(input) {
    let contacts = {};
    for (let contact of input){
        let name = contact.split(' ')[0];
        let phone = contact.split(' ')[1];
        contacts[name] = phone;
    }
    for (const key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);