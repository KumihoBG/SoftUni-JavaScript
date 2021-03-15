function valueOfString(str) {
    let totalSum = 0;
    let example = str[0];
    let command = str[1];

    for (let i = 0; i < example.length; i++) {
        let char = example[i];
        let isNum = Number(char);
        if (!((char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
            (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
            (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
            continue;
        } else if (Number.isInteger(isNum)) {
            continue;
        } else {
            let index = example.indexOf(char);
            if (command === "UPPERCASE") {
                if (char === char.toUpperCase()) {
                    let num = Number(example.charCodeAt(index));
                    totalSum += num;
                }
            } else {
                if (char === char.toLowerCase()) {
                    let num = Number(example.charCodeAt(index));
                    totalSum += num;
                }
            }
            index++;
        }
    }

    console.log(`The total sum is: ${totalSum}`);
}

valueOfString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', '']);
valueOfString(['AC/2DC', 'UPPERCASE', '']);