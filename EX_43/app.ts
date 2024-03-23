interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    const car: Car = { manufacturer, model };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}


const myCar = createCar("Toyota", "Camry", ["color", "red"],[ "year", 2022]);


console.log(myCar);
