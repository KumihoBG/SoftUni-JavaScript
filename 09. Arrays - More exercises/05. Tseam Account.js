function account(commands) {
    let account = commands[0].toString().split(' ');
    let index = 1;
    let command = commands[index++].toString().split(' ');
    let currentCommand = command[0];
    let game = command[1];
    while (currentCommand !== "Play!") {
        if (currentCommand === "Install") {
            if (!account.includes(game)) {
                account.push(game);
            }

        } else if (currentCommand === "Uninstall") {
            if (account.includes(game) == true) {
                let gameRemoved = account.indexOf(game);
                account.splice(gameRemoved, 1);
            }
        } else if (currentCommand === "Update") {
            let gameUpdated = account.includes(game);
            if (gameUpdated == true) {
                let gameToUpdate = account.indexOf(game);
                account.splice(gameToUpdate, 1);
                account.push(game);
            }
        } else if (currentCommand === "Expansion") {
            let expansion = game.toString().split('-');
            game = expansion[0];
            for (let i = 0; i < account.length; i++) {
                if (account[i] === game) {
                    let expandedGame = expansion.join(':');
                    account.splice(i + 1, 0, expandedGame);
                    break;
                }
            }
        }
        command = commands[index++].toString().split(' ');;
        currentCommand = command[0];
        game = command[1];
    }
    console.log(account.join(' '));
}

account(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);

account(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);