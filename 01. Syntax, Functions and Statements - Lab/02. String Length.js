function strLength(...params) {
    let sum = 0;
    params.forEach(param => {
        return sum += param.length;
    })
    let average = parseInt(sum / params.length);
    console.log(sum);
    console.log(average);
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');