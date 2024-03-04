function solve(text) {
    pattern = /#[A-Za-z]+/g
    let matches = text.matchAll(pattern)

    for (const match of matches) {
        console.log(match[0].slice(1));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')