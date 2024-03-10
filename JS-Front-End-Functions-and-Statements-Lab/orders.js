function getPriceOfProdict(product) {
    switch (product) {
        case "coffee":
            return 1.50
        case "water":
            return 1.00
        case "coke":
            return 1.40
        case "snacks":
            return 2.00
    }
}

function solve(product, quantity) {
    let result = getPriceOfProdict(product) * quantity
    console.log(result.toFixed(2));
}

solve("coffee", 2)