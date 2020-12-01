function cake(input) {
    let index = 0;
    let width = Number(input[index++]);
    let height = Number(input[index++]);
    let currentPiece = input[index++];
    let pieces = width * height;

    while (currentPiece !== "STOP") {
        pieces -= Number(currentPiece);
        if (pieces <= 0){
            break;
        }
        currentPiece = input[index++];
    }
    
    if (pieces < 0){
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
    }
    else {
        console.log(`${pieces} pieces are left.`);
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
