function solve(array) {

    const parkingLot = {}

    for (const line of array) {
        let [direction, carNumber] = line.split(", ")
        if(direction === "IN") {
            parkingLot[carNumber] = true
        } else {
            delete parkingLot[carNumber]
        }
    }

    let result = Object.keys(parkingLot);

    if(result.length < 1) {
        console.log("Parking Lot is Empty");
    }
    
    result
        .sort((a, b) => a.localeCompare(b))
        .forEach(number => console.log(number));
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)