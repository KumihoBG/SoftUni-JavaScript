function sum(arg) {
    let vowels = arg;
    let sum = 0;
    for (i = 0; i < vowels.length; i++){
        switch (vowels.charAt(i)) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
            default: break;
        }
    }
    console.log(sum);
}

sum("hello");
sum("hi");
sum("bamboo");
sum("beer");