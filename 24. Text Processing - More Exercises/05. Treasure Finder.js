function treasureFinder(arr) {
    let key = arr.shift().split(' ').map(Number);
    let line = arr.shift();
    let newStr = [];
    let index = 0;
    let isEnd = false;
    let message = "";

    while (line !== "find") {
        if (isEnd == true) {
            currKey = key[0];
            isEnd = false;
        }
        for (let k = 0; k < key.length; k++) {  
            if (index == line.length) {
                message = newStr.join('');
                break;
            }  
            if (isEnd == true) {
                k = k - 1;
                isEnd = false;
            }
            for (let i = 0; i < line.length; i++) {
                let currKey = key[k];
                i = index;
                let currChar = line[i].charCodeAt(0);
                currChar -= currKey;
                let newChar = String.fromCharCode(currChar);
                newStr.push(newChar);
                index++; 
                break;
            }
            if (key[k + 1] == undefined) {
                isEnd = true;
                k = 0;
            } 
        }
        let type = message.split('&')[1];
        let coordinates = message.split('<')[1];
        coordinates = coordinates.slice(0, coordinates.length-1);
        console.log(`Found ${type} at ${coordinates}`);
        line = arr.shift();
        message = '';
        newStr = [];
        index = 0;
    }
}

treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);