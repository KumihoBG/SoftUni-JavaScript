function toJson(name, lastName, hairColor){
    let myObj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };
    let person = JSON.stringify(myObj);
    console.log(person);
}

toJson('George',
'Jones',
'Brown');