function charTable(str1, str2) {
    let printLine = " ";
    let first = str1.charCodeAt();
    let second = str2.charCodeAt();

    if (first > second){
        printLine = backwards (first, second);
    } else {
        printLine = forwards (first, second);
    }
    
    function forwards(a, b){
        for (let i = a + 1; i < b; i++) {
            let currentLetter = String.fromCharCode(i);
            printLine += currentLetter + " ";
        }
        return printLine;
    }
    
    function backwards(a, b){
        for (let i = b + 1; i < a; i++) {
            let currentLetter = String.fromCharCode(i);
            printLine += currentLetter + " ";
        }
        return printLine;
    }
    return printLine;
}

console.log(charTable('a', 'd'));
console.log(charTable('#',':'));
console.log(charTable('C','#'));