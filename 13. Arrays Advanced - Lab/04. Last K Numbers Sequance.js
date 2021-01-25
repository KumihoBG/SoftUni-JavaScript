function lastKSeq(n, k){
    let result = [1];
    
    for (let i = 1; i < n; i++){
        let lastK = result.slice(-k);
        let sum = 0;
        
        for (let num of lastK){
            sum += num;   
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}

lastKSeq(6, 3);