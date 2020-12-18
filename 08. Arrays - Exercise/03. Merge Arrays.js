function mergeArrays(arr1, arr2){
    let merged = [];
    let currentOne = "";
    let currentTwo = "";
    let sum = 0;

    for (let i = 0; i < arr1.length; i++){
        currentOne = arr1[i];
        for (let j = 0; j < arr2.length; j++){
            currentTwo = arr2[j];
            if (i == 0 && j == 0 || currentOne % 2 == 0 && currentTwo % 2 == 0){
                sum = Number(currentOne) + Number(currentTwo);
                merged.push(sum);
                currentTwo = arr2[j++];
                break;
            }
            else {
                sum = currentOne + currentTwo;
                merged.push(sum);
                break;
            }
        }
    }
    console.log(merged.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);