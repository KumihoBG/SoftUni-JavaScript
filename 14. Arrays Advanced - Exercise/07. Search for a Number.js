function search(arr1, arr2) {
    let elements = arr2.shift();
    let deleteCount = arr2[0];
    let searchNum = arr2[1];
    let counter = 0;
    let result = arr1.splice(0, elements);
    result.splice(0, deleteCount);
    for (let i = 0; i < result.length; i++) {
        if (result[i] === searchNum) {
            counter++;
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);
}


search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);