function specialNums(n) {
    let sum = 0;
    let isSpecial = false;
    let tf = "";

    for (let i = 1; i <= n; i++){
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            isSpecial = true;
            tf = "True";
        } else {
            isSpecial = false;
            tf = "False";
        }
        console.log(`${i} -> ${tf}`);
        sum = 0;
    }
}

specialNums(15);