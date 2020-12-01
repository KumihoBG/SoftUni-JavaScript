function numbersDivisible9(arg1, arg2) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    let sum = 0;
    let numberStrings = "";
   for (let i = arg1; i <= arg2; i++) {
        if(i % 9 == 0){
            sum += i; 
            numberStrings += i + "\n";
        }
   }
   console.log(`The sum: ${sum}`);
   console.log(numberStrings);
}

numbersDivisible9("100", "200");