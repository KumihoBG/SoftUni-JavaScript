function deserialize(str) {
    let line = str.shift();
    let arr = [];

    while (line !== "end") {
        let [char, indexes] = line.split(':');
        let position = indexes.split('/');
        for (let i = 0; i < position.length; i++) {
            let currentIndex = Number(position[i]);
            arr[currentIndex] = char;
        }
        line = str.shift();
    }
    console.log(arr.join(''));
}

deserialize([ 'a:0/2/4/6', 'b:1/3/5', 'end' ]);
deserialize([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
  ]);