function pyramid(base, increment) {
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let counter = 0;
    let currentbase = base;

    while (currentbase > 2) {
        let marbel = currentbase * 4 - 4;
        let stone = currentbase * currentbase - marbel;
        totalstone += stone;

        counter++;
        if (counter % 5 === 0) {
            totallapis += marbel;
        } else {
            totalmarble += marbel;
        }
        currentbase -= 2;
    }
    counter++;
    let gold = currentbase * currentbase;

    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(counter * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

// pyramid(11,1);
// pyramid(11, 0.75);
// pyramid(12, 1);
pyramid(23, 0.5);