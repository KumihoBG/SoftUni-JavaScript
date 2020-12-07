function sortNumbers(arg1, arg2, arg3){
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);
    let array = [num1, num2, num3];
    array.sort(function(a, b){return b-a});
    
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

sortNumbers(2,1,3);