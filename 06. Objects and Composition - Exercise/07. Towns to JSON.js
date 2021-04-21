function townsToJson(input) {
    let [columns, ...table] = input.map(splitLine);
    function isEmptyString(w) {
        return w !== "";
    }

    function splitLine(input) {
        return result = input
            .split('|')
            .filter(isEmptyString)
            .map(el => el.trim())
            .map(el => isNaN(el) ? el : Number(Number(el).toFixed(2)));
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            let fill = entry[index];
            acc[curr] = fill;
            return acc;
        }, {});
    }));
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
