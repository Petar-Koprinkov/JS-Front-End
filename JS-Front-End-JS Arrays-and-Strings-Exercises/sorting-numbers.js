function solve(array) {
    let sortedArray = array.sort((a,b) => a-b)
    let result = []

    while(sortedArray.length > 0) {
        let firstElement = sortedArray.shift();
        result.push(firstElement);

        if (sortedArray) {
            let nextElement = sortedArray.pop();
            result.push(nextElement);
        }
    }

    return result
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));