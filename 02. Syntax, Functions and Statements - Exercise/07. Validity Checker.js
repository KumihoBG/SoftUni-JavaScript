function validityChecker(x1, y1, x2, y2) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
  
    console.log(`{${x1}, ${y1}} to {0, 0} is ${checkValidity(isValid(x1, y1, 0, 0))}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${checkValidity(isValid(x2, y2, 0, 0))}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(isValid(x1, y1, x2, y2))}`);


    function isValid(x1, y1, x2, y2) {
        let c = Math.sqrt((x2-x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(c);
    }

    function checkValidity(validity) {
        return validity ? 'valid' : 'invalid';
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);