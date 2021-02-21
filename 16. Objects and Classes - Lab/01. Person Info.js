function personInfo(firstName, lastName, age){
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return person;
}

function personInfo(firstName, lastName, age){
    return {
        firstName,
        lastName,
        age
    };
}

console.log(personInfo("Peter", "Pan","20"));