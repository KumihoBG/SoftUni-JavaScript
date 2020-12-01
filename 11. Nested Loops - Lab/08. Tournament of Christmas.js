function tournament(input) {
    let index = 0;
    let tournamentDays = Number(input[index++]);
    let daysWin = 0;
    let daysLost = 0;
    let reward = 0;
    let totalRaisedMoney = 0;
    let totalWinGame = 0;
    let totalLoseGame = 0;

    for (let i = 0; i < tournamentDays; i++) {
        let command = input[index++];

        while (command !== "Finish") {
            let typeSport = command;
            let score = input[index++];
            if (score === "win"){
                reward += 20;
                daysWin++;
            }
            else {
                daysLost++;
            }
            command = input[index++];
        }

        if (daysWin > daysLost){
            reward *= 1.10;
            totalWinGame++;
        } else {
            totalLoseGame++;
        }
        totalRaisedMoney += reward;
        reward = 0;
        daysWin = 0;
        daysLost = 0;
    }

    if (totalWinGame > totalLoseGame) {
        totalRaisedMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }
}

// tournament(["2",
// "volleyball",
// "win",
// "football",
// "lose",
// "basketball",
// "win",
// "Finish",
// "golf",
// "win",
// "tennis",
// "win",
// "badminton",
// "win",
// "Finish"])

tournament([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
]);
