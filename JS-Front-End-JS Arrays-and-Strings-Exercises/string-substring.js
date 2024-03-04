function solve(word, text) {
    text = text.toLowerCase();
    let textArray = text.split(" ")

    if (textArray.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

solve('javascript',
'JavaScript is the best programming language'
)