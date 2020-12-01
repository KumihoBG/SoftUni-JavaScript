function cinema(input) {
    let index = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    let sumTickets = 0;
    let busySpace = 0;
    let totalTicketsCount = 0;

    while (input[index] !== "Finish") {
        let film = input[index++];
        let freeSpaces = Number(input[index++]);
        while (freeSpaces >= 0 || input[index] !== "End" || input[index] !== "Finish") {
            if (input[index] === "End" || input[index] === "Finish") {
                break;
            }
            if( sumTickets == freeSpaces){
                break;
            }
            if (index == input.length){
                break;
            }
            switch (input[index]) {
                case "student":
                    studentTickets++;
                    sumTickets++;
                    break;
                case "standard":
                    standartTickets++;
                    sumTickets++;
                    break;
                case "kid":
                    kidsTickets++;
                    sumTickets++;
                    break;
                default:
                    break;
            }
            index++;
        }
        busySpace = (sumTickets / freeSpaces) * 100;
        console.log(`${film} - ${busySpace.toFixed(2)}% full.`);
        totalTicketsCount += sumTickets;
        if (input[index] === "Finish"){
            console.log(`Total tickets: ${totalTicketsCount}`);
            console.log(`${((studentTickets / totalTicketsCount) * 100).toFixed(2)}% student tickets.`);
            console.log(`${((standartTickets / totalTicketsCount) * 100).toFixed(2)}% standard tickets.`);
            console.log(`${((kidsTickets / totalTicketsCount) * 100).toFixed(2)}% kids tickets.`);
        }
        if (index >= input.length){
            break;
        }
        sumTickets = 0;
        film = input[index++];
    }
}

// cinema(["Taxi",
//     "10",
//     "standard",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "standard",
//     "End",
//     "Scary Movie",
//     "6",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "Finish"
// ]);
console.log('----------------------');
cinema(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);