function songs(list) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberSongs = list.shift();
    let typeList = list.pop();

    for (let strings of list) {
        let [type, name, time] = strings.split("_");
        let song = new Song(type, name, time);
        if (typeList == "all") {
            console.log(song.name);
        } else if (typeList == song.type) {
            console.log(song.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);