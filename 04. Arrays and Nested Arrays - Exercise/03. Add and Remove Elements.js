function addRemove(input) {
    let initialNumber = 1;
    let result = [];

    while (input.length > 0) {
        let command = input.shift();
        switch(command) {
            case "add": 
            result.push(initialNumber);
            break;
            case "remove": 
            result.pop();
            break;
        }
        initialNumber++;
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

// addRemove(['add', 
// 'add', 
// 'add', 
// 'add']
// );

// addRemove(['remove', 
// 'remove', 
// 'remove']
// );

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']);