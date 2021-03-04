function partyTime(input) {
    let index = input.indexOf("PARTY");
    let guestList = input.slice(0, index);
    let guestsArrived = input.slice(index + 1);
    let reservations = generateList(guestList);

    guestsArrived.forEach(guest => {
        let status = checkVip(guest);
        let correctList = status ? "vip" : "regular";
        let currentGuest = reservations[correctList].find(o => o.guest == guest);
        if (status && currentGuest){
            currentGuest.isHere = true;
        } else if (!status && currentGuest){
            currentGuest.isHere = true;
        }
    });

    let vips = reservations.vip.filter(o => o.isHere === false);
    let regulars = reservations.regular.filter(o => o.isHere === false);
    console.log(vips.length + regulars.length);
    vips.concat(regulars).forEach(el => console.log(el.guest));

    function generateList(guests) {
        let obj = {
            vip: [],
            regular: [],
        };

        guests.forEach((guest) => {
            let guestObj = { guest, isHere: false }
            if (checkVip(guest)) {
                obj.vip.push(guestObj);
            } else {
                obj.regular.push(guestObj);
            }
        });

        return obj;
    }

    function checkVip(guest) {
        return !isNaN(Number(guest[0]));
    }
}

partyTime([
    "7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
]);

partyTime([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
]);
