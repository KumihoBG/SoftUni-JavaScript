function rageQuit(input) {
    let pattern = /(?<string>[a-z\W_]*)(?<number>[\d]*)/gi;
    let newStr = input.toString();
    let newInput = newStr.split(pattern);
    newInput = newInput.filter(v => v != '');
    let printLine = "";
    let uniqueChars = [];

    for (let i = 0; i < newInput.length; i += 2) {
        let str = newInput[i];
        let number = Number(newInput[i + 1]);
        str = str.toUpperCase();
        for (let k = 0; k < number; k++) {
            printLine += str;
        }
        if (number > 0) {
            for (let char of str) {
                if (!uniqueChars.includes(char)) {
                    uniqueChars.push(char);
                }
            }
        }
    }

    console.log(`Unique symbols used: ${uniqueChars.length}`);
    console.log(printLine);
}

rageQuit(['aSd2&5s@1']);
rageQuit(['a3']);
rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
]);