function sovle (arr) {
    let oddNumbers = arr.filter(number => number % 2 !== 0)
    let evenNumbers = arr.filter(number => number % 2 ===0)
    
    let oddSum = 0
    let evenSum = 0
    
    while (oddNumbers.length > 0 ) {
        oddSum += oddNumbers.pop()
    }
    
    while (evenNumbers.length > 0 ) {
        evenSum += evenNumbers.pop()
    }
    
    console.log(evenSum - oddSum);
}

sovle([2,4,6,8,10])