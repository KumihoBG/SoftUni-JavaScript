function lettersChange(input) {
    let pairs = input.split(' ').filter(w => w.length > 0);
    let result = 0;
    let totalResult = 0;

    for (let line of pairs) {
        line = Array.from(line);
        let first = line.shift();
        let second = line.pop();
        line = line.join('');
        line = Number(line);
        let position = Number(alphabetPosition(first));
        let positionTwo = Number(alphabetPosition(second))
        
        if (first === first.toUpperCase() || first === first.toUpperCase()) {  
            result = line / position;
        } else {
            result = line * position;
        }
    
        if (second === second.toUpperCase() || second === second.toUpperCase()) {  
            result -= positionTwo;
        } else {
            result += positionTwo;
        }

        totalResult += result;
    }

    console.log(totalResult.toFixed(2));

    function alphabetPosition(text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let code = text.toUpperCase().charCodeAt(i)
            if (code > 64 && code < 91) {
                result += (code - 64) + " ";
            }
        }
        return result.slice(0, result.length - 1);
    }
}

lettersChange('A12b s17G');

lettersChange('P34562Z q2576f   H456z');

lettersChange('a1A');