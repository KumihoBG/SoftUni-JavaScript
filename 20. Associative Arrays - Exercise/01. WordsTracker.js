function wordsTracker(input) {
    let text = input.slice(1);
    let occurances = getWantedWords(input);

    text.forEach(word => {
        if(Object.keys(occurances).includes(word)){
            occurances[word]++;
        }
    });

    let sorted = Object.entries(occurances).sort((a,b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        console.log(`${key} - ${occurances[key]}`);
    }

    function getWantedWords(arr){
        let occurances = {};
        arr.shift().split(' ').forEach(word => {
            occurances[word] = 0;
        });;
        return occurances;
    }
}

wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);