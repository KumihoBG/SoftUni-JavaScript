function calorieObject(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (i % 2 == 0) {
            obj[current] = Number(input[i + 1]);
        }
    }
    return obj;
}

calorieObject([ 'Yoghurt', '48', 'Rise', '138', 'Apple', '52' ]);
calorieObject([
    'Potato',   '93',
    'Skyr',     '63',
    'Cucumber', '18',
    'Milk',     '42'
  ]);