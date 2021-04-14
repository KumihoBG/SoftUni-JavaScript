function sortByTwo(input) {
    let sorted = input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    return sorted.join('\n');
}

sortByTwo(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

sortByTwo(['test', 
'Deny', 
'omen', 
'Default']
);

sortByTwo(['alpha', 
'beta', 
'gamma']
);