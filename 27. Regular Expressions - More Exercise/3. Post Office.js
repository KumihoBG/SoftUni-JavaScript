function postOffice(input) {
    let [first, second, third] = input.shift().split('|');
    let patternOne = /(?<left>[#$%*&]{1})[A-Z]+(?<right>[#$%*&]{1})/g;
    let patternTwo = /[0-9]{2}:[0-9]{2}/g;
    let patternThree = /\b[A-Z]{1}[a-z]{1,}[-]*[A-Za-z]*\b/g;
    let resultOne = patternOne.exec(first);
    let resultTwo = patternTwo.exec(second);
    let resultThree = patternThree.exec(third);
    let dataOne = [];
    let dataTwo = [];
    let dataThree = [];
    let cleaned = [];
    let newChar = '';
    let data = [];

    while (resultOne !== null) {
        if (resultOne.groups['left'] === resultOne.groups['right']) {
            dataOne.push(resultOne[0]);
            cleaned = dataOne[0].toString().split(/[#$%*&]{1}/g);
            cleaned = cleaned.filter(v => v != '');
            resultOne = patternOne.exec(first);
        }
    }

    while (resultTwo !== null) {
        dataTwo.push(resultTwo[0]);
        resultTwo = patternTwo.exec(second);
    }

    while (resultThree !== null) {
        dataThree.push(resultThree[0]);
        resultThree = patternThree.exec(third);
    }

    let final = cleaned.toString().split('');
    for (let char of final) {
        for (let line of dataTwo) {
            let [code, length] = line.split(':');
            length = Number(length) + 1;
            newChar = String.fromCharCode(code);
            for (let el of dataThree) {
                let current = el;
                let startChar = current[0];
                let isChar = ((char === newChar) && (char === startChar) && (newChar == startChar));
                let isLength = current.length === length;
 
                if (isChar && isLength) {
                    if (!data.includes(current)){
                        data.push(current);
                    }
                    break;
                }
            }
        }
    }

    console.log(data.join('\n'));
}

postOffice([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]);
console.log("----------------");
postOffice([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
]);