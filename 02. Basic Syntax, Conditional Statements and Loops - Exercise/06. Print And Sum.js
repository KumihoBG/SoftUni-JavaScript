function print(num1, num2){
    let sum = 0;
    let printLine = "";
    let current = 0;

    for (let i = num1; i <= num2; i++){
        sum += i;
        current = i.toString();
        printLine += current + " ";
    }
   
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

print(5, 10);