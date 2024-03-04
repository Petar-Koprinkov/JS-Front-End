function solve(count, type, day) {
    let totalPrice
    let price
    if (type === "Students") {
        switch (day) {
            case "Friday":
                price = 8.45
                break;
            case "Saturday":
                price = 9.80
                break
            case "Sunday":
                price = 10.46
        }
    } else if (type === "Business"){
        switch (day) {
            case "Friday":
                price = 10.90
                break;
            case "Saturday":
                price = 15.60
                break
            case "Sunday":
                price = 16
        }
    } else if (type == "Regular"){
        switch (day) {
            case "Friday":
                price = 15
                break;
            case "Saturday":
                price = 20
                break
            case "Sunday":
                price = 22.50
        }
    }


    totalPrice = price * count

    if (type === "Students" && count >= 30){
        totalPrice *= 0.85
    } else if (type === "Business" && count >= 100){
        totalPrice = totalPrice - price * 10
    } else if (type === "Regular" && count >= 10 && count <= 20) {
        totalPrice *= 0.95
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40,
    "Regular",
    "Saturday"
    )