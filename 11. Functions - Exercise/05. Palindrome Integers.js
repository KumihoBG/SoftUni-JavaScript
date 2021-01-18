function palindrom(input){
    let isPal = false;
    for (let i = 0; i < input.length; i++){
        let current = input[i].toString();
        for (let j = 0; j < current.length; j++){
            let first = current[0];
            let last = current[current.length-1];
            if (first == last){
                isPal = true;
                break;
            } else {
                isPal = false;
                break;
            }
        }
        console.log(isPal);
    }
}

// palindrom([123,323,421,121]);
palindrom([32,2,232,1010]);