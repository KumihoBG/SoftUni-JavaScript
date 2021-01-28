function houseParty(arr) {
    let guestList = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let guest = arr.shift();
        let name = guest.split(' ').shift();
        let action = guest.split(' ').slice(1).join(' ');
        if (action.includes('not')) {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    }
    console.log(guestList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);

function houseParty(arr) {
    let guestList = [];
    arr.forEach(token => {
        let a = token.split(` `);
        let name = a[0];
        if (token.includes(`not`)) {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    });
    guestList.forEach(element => {
        console.log(element);
    });
}