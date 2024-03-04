function sovle(day, age) {
    let totalPrice
    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday":
            totalPrice = 12
            break;
            
            case "Weekend":
            totalPrice = 15
            break;
            
            case "Holiday":
            totalPrice = 5
            break
        }
    }else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday":
            totalPrice = 18
            break;
            
            case "Weekend":
            totalPrice = 20
            break;
            
            case "Holiday":
            totalPrice = 12
            break
        } 
    }else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday":
            totalPrice = 12
            break;
            
            case "Weekend":
            totalPrice = 15
            break;
            
            case "Holiday":
            totalPrice = 10
            break
        }
    }else {
        totalPrice = "Error!"
    }




    if (totalPrice !== "Error!") {
        console.log(`${totalPrice}$`);
    } else {
        console.log("Error!");
    }


}
    
    sovle('Holiday', 15)