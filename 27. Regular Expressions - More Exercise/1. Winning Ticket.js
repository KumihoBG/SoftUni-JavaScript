function ticket(input) {
    let splitPatternTrim = / *, */g;
    let line = input.toString().split(splitPatternTrim);
    let jackpot = /(?<symbol>[@#$^]{20})/gm;
    let pattern = /[a-z]*[@#$^]{6}[a-z]*[@#$^]{6}[a-z]*/gi;
    let match = /[@#$^]{6}/gi;
    let validity = /[^@#$^]{6}[\w]*[\W]*/gi;
    let lengthOne = 0;
    let lengthTwo = 0;

    for (let el of line) {
        let winner = jackpot.exec(el);
        let ticket = pattern.exec(el);
        let valid = validity.exec(el);

        if (ticket === null && el.length < 20) {
            console.log("invalid ticket");
        } else if (valid !== null) {
            console.log(`ticket "${el}" - no match`);
        } else if (winner == null && match !== null && valid == null) {
            let half = el.length / 2;
            let symbols = match.exec(el);
            for (let i = 0; i < half; i++) {
                lengthOne = symbols[0].length;
                break;
            }
            for (let k = half; k < el.length; k++) {
                lengthTwo = symbols[0].length;
                break;
            }
            if (lengthOne === lengthTwo) {
                let symbol = symbols[0].split('').shift();
                console.log(`ticket "${el}" - ${lengthOne}${symbol}`);
            }
        } else if (winner !== null) {
            let symbol = winner.groups['symbol'][0];
            console.log(`ticket "${el}" - ${el.length / 2}${symbol} Jackpot!`);
        }
    }
}

    ticket(['Cash$$$$$$Ca$$$$$$sh']);
    ticket(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey']);
    ticket(['validticketnomatch:(']);
    ticket (["^^^^^^Ca^^^^^^shCash"]);
