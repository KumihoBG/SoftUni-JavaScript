function wordsTracker(input) {
    let text = input.slice();
    let occurances = getWantedWords(input);
    let count = 1;

    function getWantedWords(arr){
        let occurances = {};
        arr.shift().split(' ').forEach(word => {
            occurances[word] = 0;
        });;
    }
}

wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);