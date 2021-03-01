function solve(arrStr){
    let meetings = {};

    arrStr.forEach(line => {
        let [day, name] = line.split(' ');
        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    
    for (const [day, name] of Object.entries(meetings)){
        console.log(`${day} -> ${name}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);