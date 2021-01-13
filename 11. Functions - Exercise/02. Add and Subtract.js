function sum(num1, num2, num3){
    let result = add(num1, num2);
 
    function add(a, b) {
        return a + b;
    }
    return result - num3;
}

console.log(sum(23, 6, 10));
