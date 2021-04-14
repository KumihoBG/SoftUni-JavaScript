function pie(pieList, flavorOne, flavorTwo) {
    let result = [];

    for (let pie of pieList) {
        if (pie.includes(flavorOne) || pie.includes(flavorTwo)) {
            let startIndex = pieList.indexOf(flavorOne);
            let endIndex = pieList.indexOf(flavorTwo);
            result = pieList.slice(startIndex, endIndex + 1);
            break;
        }
    }
   return result;
}

console.log(pie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));