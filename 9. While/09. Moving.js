function moving(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let height = Number(input[index++]);
    let command = input[index++];
    let cubSqM = width * length * height;
    let sumBoxes = 0;
    let freeCubM = 0;

    while (command !== "Done"){
        sumBoxes += Number(command);
        freeCubM = cubSqM - sumBoxes;
        if (freeCubM < 0){
            console.log(`No more free space! You need ${Math.abs(freeCubM)} Cubic meters more.`);
            break;
        }
        command = input[index++];
    }
    if (command === "Done" && freeCubM > 0){
        console.log(`${Math.abs(freeCubM)} Cubic meters left.`);
    }
}

moving(["10",
"1",
"2",
"4",
"6",
"Done"]);

// moving(["10", 
// "10",
// "2",
// "20",
// "20",
// "20",
// "20",
// "122"]);

