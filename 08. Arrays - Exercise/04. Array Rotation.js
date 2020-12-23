function arrayRotate(input, rotator){

    for (let i = 0; i < rotator; i++){
       let newEl = input.shift()
       input.push(newEl);
    }
    console.log(input.join(' ').toString());
}

arrayRotate([32, 21, 61, 1], 4);
arrayRotate([51, 47, 32, 61, 21], 2);