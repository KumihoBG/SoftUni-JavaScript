function dungeon(str) {
    let rooms = str.toString().split('|');
    let finalHealth = 0;
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    for (let i = 0; i < rooms.length; i++) {
        bestRoom++;
        let item = rooms[i].toString().split(' ').shift();
        let monsterNumber = Number(rooms[i].split(' ').slice(1));
        if (item === "potion") {
            health += monsterNumber;
            if (health > 100) {
                finalHealth = health - 100;
                finalHealth = monsterNumber - finalHealth;
                console.log(`You healed for ${finalHealth} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${monsterNumber} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            
        } else if (item === "chest") {
            coins += monsterNumber;
            console.log(`You found ${monsterNumber} coins.`);
        } else {
            health -= monsterNumber;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                break;
            }
        }
    }
    if (health <= 0){
        console.log(`Best room: ${bestRoom}`);
    } else {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }  
}

// dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);