function sequences(matrix) {
    let obj = {};
    let storage = [];

    for (let line of matrix) {
        line = JSON.parse(line);
        if (!obj.hasOwnProperty(line)){
            obj[line] = line;
        }
    }
    let sortedObj = Object.values(obj).sort((a,b) => a.length - b.length);
    
    for (let arr of sortedObj) {
        let sortedDes = arr.sort((a,b) => b - a);
        storage.push(sortedDes);
    }
    let result = Array.from(new Set(storage.map(JSON.stringify)), JSON.parse);
    
    for (let el of result) {
        console.log(`[${el.join(', ')}]`);
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);

sequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);