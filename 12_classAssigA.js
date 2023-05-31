class Vehicle {
    constructor(name, type, price, color, mileage) {
        this.name = name,
            this.type = type,
            this.price = price,
            this.color = color,
            this.mileage = mileage
    }
}

const vehicle1 = new Vehicle("Jupiter", "Two Wheeler", "Rs. 89000", "Brown", "60.44 kmpl");
const vehicle2 = new Vehicle("Audi", "Four Wheeler", "Rs. 44.89 Lakh", "Red", "14.93 kmpl");
const vehicle3 = new Vehicle("Activa", "Two Wheeler", "Rs. 98000", "White", "55-60 km/l");
const vehicle4 = new Vehicle("Mahindra Thar", "Four Wheeler", "Rs. 10.54 Lakh", "Black", "15.2 kmpl");
const vehicle5 = new Vehicle(" Mercedes-Benz", "Four Wheeler", "Rs. 45.96 Lakh", "Grey", "23 Kmpl");
const arrayOfVehicle = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];