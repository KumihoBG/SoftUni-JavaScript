function smallestNum(a, b, c){
    let smallest = Number.MAX_SAFE_INTEGER;

    smallest = smaller(a, smallest);
    smallest = smaller (b, smallest);
    smallest = smaller (c, smallest);

    function smaller(x, y) {
        if (x < y) {
            y = x;
        }
        return y;
    }
    return smallest;
}

// console.log(smallestNum(2, 5, 3));
console.log(smallestNum(600, 342, 123));