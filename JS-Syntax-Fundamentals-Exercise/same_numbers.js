function solve(number) {
    let textNumber = number.toString()
    let sum = Number(textNumber[0])
    let flag = true

    for(i = 1; i <= textNumber.length - 1; i++) {
        sum += Number(textNumber[i])
        if(textNumber[i] !== textNumber[i-1]) {
            flag = false
        }
    }

    if (flag === false){
    console.log("false");
    } else {
        console.log("true");
    }

    

    console.log(sum);

}

solve(1444)