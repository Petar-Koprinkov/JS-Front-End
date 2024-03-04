function solve(text, start, count ) {
    let newText = text.substring(start, count + start)
    console.log(newText);
}

solve('ASentence', 1, 8)