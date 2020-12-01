function division(input) {
    let nums = Number(input[0]);
    let divide2 = 0;
    let divide3 = 0;
    let divide4 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);
        if (current % 2 === 0) {
            divide2++;
        } 
        if (current % 3 === 0) {
            divide3++;
        }
        if (current % 4 === 0) {
            divide4++;
        }
    }
    console.log(`${(divide2 / nums * 100).toFixed(2)}%`);
    console.log(`${(divide3 / nums * 100).toFixed(2)}%`);
    console.log(`${(divide4 / nums * 100).toFixed(2)}%`);
}

division(["3","3","6","9"]);
// division(["10","680","2","600","200","800","799","199","46","128","65"]);

