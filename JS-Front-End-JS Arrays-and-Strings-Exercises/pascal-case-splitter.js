function solve(text) {
    let result = []
    let pattern = /[A-Z][a-z]*/g;
    let matches = text.matchAll(pattern);

    for (let match of matches) {
        result.push(match)
    }

    console.log(result.join(", "));
}

solve('SSplitMeIfYouCanHaHaYouCantOrYouCan')