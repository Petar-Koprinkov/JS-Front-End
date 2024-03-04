function solve(count, numbers) {
    let newNumbers = numbers
                    .slice(0,count)
                    .reverse()
                    .join(" ")
    console.log(newNumbers);
   
}

solve(4, [-1, 20, 99, 5])

