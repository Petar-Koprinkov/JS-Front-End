function solve(words, text) {
    let wordsArray = words.split(", ");
    let matches = text.matchAll(/\*+/g);

    for (const match of matches) {
        let word = wordsArray.find(w => w.length == match[0].length)
        text = text.replace(match[0], word)
    }

    return text
}

console.log(solve('great, learning', 'softuni is ***** place for ******** new programming languages *****'));