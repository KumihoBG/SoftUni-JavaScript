function matchName(str) {
    let validNames = [];
    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;

    let validName;
    while (validName = pattern.exec(str)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}

matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");