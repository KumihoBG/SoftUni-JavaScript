function passGenerator(str) {
    let template = str[2];
    let password = str[0].concat(str[1]);
    let count = getVowels(password);

    for (let i = 0; i < template.length; i++) {
        let symbolNew = template[i].toUpperCase();

        for (let k = 0; k < password.length; k++) {
            let char = password[k];
            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                password = password.replace(char, symbolNew);

                if (template[i + 1] == undefined) {
                    i = 0;
                    symbolNew = template[i].toUpperCase();
                    continue;
                } else {
                    symbolNew = template[i + 1].toUpperCase();
                    i++;
                }
            }
        }
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);

    function getVowels(str) {
        var m = str.match(/[aeiou]/gi);
        return m === null ? 0 : m.length;
    }
}

passGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);

passGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);

passGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]);