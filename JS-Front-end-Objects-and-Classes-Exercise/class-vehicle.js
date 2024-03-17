class Vehicle {

    #parts = {}

    constructor (type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.fuel = Number(fuel)
    }

    get parts() {
        return this.#parts
    }

    set parts(object) {
        this.#parts = { 
        engine: object.engine,
        power: object.power,
        quality: object.engine * object.power
        }
    }

    drive(fuelLost) {
        this.fuel -= fuelLost;
    }
}

let vehicle = new Vehicle('a', 'b', {engine: 6, power: 100}, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
