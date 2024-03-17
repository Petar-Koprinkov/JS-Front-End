function solve(input) {
    let result = []
    for (const line of input) {
        if (line.includes("addMovie")) {
            let dictionary = {
                name: line.substring("addMovie ".length)
            }

            result.push(dictionary)
        } else if (line.includes("directedBy")) {
            let [movieName, director] = line.split(" directedBy ");
            let movie = result.find(movie => movie.name === movieName);

            if(movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            let [movieName, date] = line.split(" onDate ");
            let movie = result.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    result
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)))
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )