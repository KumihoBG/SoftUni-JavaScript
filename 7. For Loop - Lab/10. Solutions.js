
 
function reverseCount(num) {
    num = Number(num);
 
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}
 
function countWithStep3(num) {
    num = Number(num);
 
    for (let i = 1; i <= num; i+=3) {
        console.log(i);
    }
}
 
function powersOfTwo(n) {
    n = Number(n);
 
    for (let i = 0; i <= n; i+=2) {
        i = 1;
        console.log(Math.pow(2,i));
    }
 
}
 
// powersOfTwo();
 
 
function stringsTest(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
 
 
    console.log("%c" + $str, "color:")
}
 
 
 
function sumOfVowels(str) {
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        switch(str.charAt(i)) {
            case "a": 
                sum += 1;
                break;
            case "e": 
                sum += 2;
                break;
            case "i": 
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log(sum);
}
 
function sumOfDigits(num) {
    let sum = 0;
 
    for (let i=0; i < num.length; i++) {
        sum+= Number(num[i]);
    }
    console.log(sum);
}
 
function dividedByNine(n, m) {
    n = Number(n);
    m = Number(m);
    
    let sum = 0;
    let numbersString = "";
 
    for (let i = n; i <= m; i++) {
        if (i % 9 == 0) {
            sum+= i;
            numbersString = numbersString + i + "\n";
        }
    }
 
    console.log("The sum: " + sum);
    console.log(numbersString);
}
 
 
function smartLily(age, washerPrice, toyPrice) {
    age = Number(age);
    washerPrice = Number(washerPrice);
    toyPrice = Number(toyPrice);
 
    let sum = 0;
    let toyCount = 0;
    let moneyCount = 0;
    let moneyPerBd = 10;
 
    for (let i = 1; i <= age; i++) {
        if (i%2 == 0) {
            moneyCount += moneyPerBd;
            moneyCount = moneyCount - 1;
            moneyPerBd += 10;
        } else {
            toyCount++;
        }
    }
 
    sum = toyCount * toyPrice + moneyCount;
    
    if (sum >= washerPrice) {
        console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - sum).toFixed(2)}`);
    }
}