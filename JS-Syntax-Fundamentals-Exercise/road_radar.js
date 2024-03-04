function solve(speed, area) {
    let limit
    let difference
    let status
    switch (area) {
        case "motorway":
            limit = 130
            break;
        case "interstate":
            limit = 90
            break;
        case "city":
            limit = 50
            break;
        case "residential":
            limit = 20
            break;
    }

    difference = speed - limit

    if (difference <= 0) {
        return console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }

    if (difference <= 20) {
        status = "speeding"
    } else if (difference <= 40) {
        status = "excessive speeding"
    } else {
        status = "reckless driving"
    }

    return console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);

}

solve(200, 'motorway')