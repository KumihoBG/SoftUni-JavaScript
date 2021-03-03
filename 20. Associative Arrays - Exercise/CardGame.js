function cardGame(input) {
    let players = generatePlayers(input);
    let cardMapper = {
        p: {
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14,
        },
        t: {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1,
        }
    }

    Object.keys(players).forEach(player => {
        console.log(`${player}: ${totalPlayerResult(players[player])}`);
    });

    function totalPlayerResult(set) {
        let totalPower = 0;
        set.forEach(card => {
            let currentCard = card.split('');
            let value = currentCard.slice(0, currentCard.length - 1).join('');
            let suit = currentCard.slice(-1).join('');
            let p = 0;
        
            if (!cardMapper.p[value]) {
                p = Number(value);
            } else {
                p = cardMapper.p[value];
            }

            totalPower += (p * cardMapper.t[suit]);
        })
        return totalPower;
    }

    function generatePlayers(arr) {
        let obj = {};
        arr.forEach(playerInfo => {
            let [playerName, playerCards] = playerInfo.split(': ');
            let currentCardsList = playerCards.split(', ');
            if (!obj[playerName]) {
                obj[playerName] = new Set(currentCardsList);
            } else {
               playerCards.split(', ').forEach(card => {
                   obj[playerName].add(card);
               });
            }
        });
        return obj;
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);