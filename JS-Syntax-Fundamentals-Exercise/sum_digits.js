function solve(number) {
    let string = number.toString();
    let result = 0

    for(i = 0; i < string.length; i++) {
        result += Number(string[i])
    }

    console.log(result);
}

solve(245678)