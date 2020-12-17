function commonElements(arr1, arr2){
    let first = "";
    let second = "";
    let match = "";

    for (let i = 0; i < arr1.length; i++){
        first = arr1[i];
        for (let j = 0; j < arr2.length; j++){
            second = arr2[j];
            if (first === second){
                match = first;
                console.log(match);
            }
        }
    }
}

// commonElements(
// ['Hey', 'hello', 2, 4, 'Peter', 'e'],
// ['Petar', 10, 'hey', 4, 'hello', '2']);

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);
