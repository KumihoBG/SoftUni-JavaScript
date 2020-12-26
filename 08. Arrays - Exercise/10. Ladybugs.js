function ladybugs(str){
    let newArr = str.toString().split(',');
    let fieldSize = Number(newArr[0]);
    let indexes = newArr[1].toString().split(' ');  
    let cell = 0;
    let result = [];

    for (let i = 2; i < newArr.length; i++){
        let move = newArr[i].toString().split(' ');
        let bugIndex = Number(move[0]);
        let direction = move[1];
        let flyLength = Number(move[2]);
        for (let j = 0; j < indexes.length; j++){
            let ladyBug = Number(indexes[j]);
            
            if (direction == "right"){
                bugIndex += flyLength;
                if (bugIndex >= fieldSize){
                    bugIndex = 0;
                    cell = 0;
                    result.push(cell);
                    break;
                }
                cell = 0;
                result.push(cell);
                if (bugIndex == ladyBug){
                    bugIndex += 1;
                    cell = 1;
                    result.push(cell);
                }
                
            }
        }
            
    }
    console.log(result.join(' '));
}

// ladybugs([ 3, '0 1','0 right 1','2 right 1' ]);
ladybugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']);