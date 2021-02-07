function movies(movies) {
    let list = [];
    for (const movie of movies){
        
        if (movie.includes('addMovie')){
            let currentMovie = {};
            let name = movie.substring(9);
            currentMovie.name = name;
            list.push(currentMovie);
        } else if (movie.includes('directedBy')){
            let arrLeft = movie.split(' directedBy ');
            let [name, directorName] = arrLeft;
            let myMovie = list.find(x => x.name === name);
            if (myMovie){
                myMovie.director = directorName;
            }
        } else {
            let [name, movieDate] = movie.split(' onDate ');
            let myMovie = list.find(x => x.name === name);
            if (myMovie){
                myMovie.date = movieDate;
            }
        }
    }
    list.forEach(m => {
        if (m.name && m.director && m.date){
            console.log(JSON.stringify(m));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);