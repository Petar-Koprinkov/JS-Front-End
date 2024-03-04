function solve(param) {
    let typeOfArgument = typeof(param)
    let circleArea

    if (typeOfArgument === "number"){
        circleArea = Math.PI * param * param
        console.log(circleArea.toFixed(2));
    } else {
        circleArea = `We can not calculate the circle area, because we receive a ${typeOfArgument}.`
        console.log(circleArea);
    }
}


solve(5)