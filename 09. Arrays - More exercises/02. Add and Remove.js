function addRemove(arr){
    let num = 1;
    let sum = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "add"){
            sum += num;
            newArr.push(sum);
        } else if (arr[i] === 'remove'){
            newArr.pop();
        } 
    }
    if (newArr.length == 0){
        console.log("Empty");
    }
    console.log(newArr.join(' '));
}
// addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
// addRemove(['remove', 'remove', 'remove']);