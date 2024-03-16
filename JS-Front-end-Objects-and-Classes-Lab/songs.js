function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    
    let songs = []
    let numberOfSongs = input.shift()
    let command = input.pop()

    for (const line of input) {
        let [typeList, name, time] = line.split("_")
        songs.push(new Song(typeList, name, time))
    }

    for (const song of songs) {
        if (command == "all") {
            console.log(song.name);
        }

        if(command === song.typeList) {
            console.log(song.name);
        }
    }
}


solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )