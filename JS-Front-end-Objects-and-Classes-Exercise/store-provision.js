function solve(stock, products) {
    let store = {}

    for (let index = 0; index < stock.length; index += 2) {
        store[stock[index]] = Number(stock[index + 1])
    }

    for (let index = 0; index < products.length; index += 2) {
        if(!store.hasOwnProperty(products[index])) {
            store[products[index]] = 0
        }

        store[products[index]] += Number(products[index + 1])
    }

    Object.entries(store).forEach(element => console.log(`${element[0]} -> ${element[1]}`));
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )