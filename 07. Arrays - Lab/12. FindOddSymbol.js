// function differentSymbolsNaive(str) {
//     let charArr = str.split('');
//     let set = new Set();
//     for(let char of charArr) {
//         set.add(char);
//     };
//    console.log(set.size);
// }


function differentSymbolsNaive(str) {
    let newStr = str.split('');
    let difference = [];
    let result = 0;
    for (let i = 0; i < newStr.length - 1; i++) {
        if (newStr[i].includes('a') && !difference.includes(newStr[i])) {
            result = difference.push(newStr[i]);
        } else if (newStr[i].includes('b') && !difference.includes(newStr[i])) {
            result = difference.push(newStr[i]);
        } else if (newStr[i].includes('c') && !difference.includes(newStr[i])) {
            result = difference.push(newStr[i]);
        }
    }
    return result;
}

differentSymbolsNaive('cabca');