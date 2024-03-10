function solve(word, count) {
    let string = (a, b) => a.repeat(b);
    console.log(string(word, count));
}

solve("abc", 3)