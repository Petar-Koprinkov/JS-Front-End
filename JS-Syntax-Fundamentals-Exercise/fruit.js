function solve(fruit, weightInGrams, priceForKg) {
    let weightInKg = weightInGrams / 1000
    let finalPrice = weightInKg * priceForKg
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)