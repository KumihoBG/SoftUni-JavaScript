function gladiatorInventory(arr){
    let index = 0;
    let inventory = arr[0].split(' ');
    
    for (let i = 1; i < arr.length; i++){
        let command = arr[i].split(' ');
        let action = command[0];
        let equipment = command[1];
        let upgrade = equipment.split('-');
        let weapon = upgrade[0];
        let material = upgrade[1];

        if (action === "Buy"){
            if (inventory.includes(equipment)){
                break;
            } else {
            inventory.push(equipment);
            }
        }
        if (action === "Trash"){
            if (inventory.includes(equipment)){
                inventory.splice(inventory.indexOf(equipment), 1);
            }
        }
        if (action === "Repair"){
            if (inventory.includes(equipment)){
                inventory.splice(inventory.indexOf(equipment), 1);
                inventory.push(equipment);
            }
        }
        if (action === "Upgrade"){
            if (inventory.includes(weapon)){
                let newIndex = inventory.indexOf(weapon) + 1;
                weapon = `${weapon}:${material}`;
                inventory.splice(newIndex, 0, weapon)
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);