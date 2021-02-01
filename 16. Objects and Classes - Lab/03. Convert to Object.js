function convertToObject(jsonFormat){
    let person = JSON.parse(jsonFormat);
    for (let [keys, value] of Object.entries(person)){
        console.log(`${keys}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');