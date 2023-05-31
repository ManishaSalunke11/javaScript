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

for (const vehicles of arrayOfVehicle) {
    console.log(`Vehicle details is:${vehicles.name},${vehicles.type},${vehicles.price},${vehicle5.color},${vehicles.mileage}`);
}
class College {
    constructor(collegeName, city, contact, type) {
        this.collegeName = collegeName,
            this.city = city,
            this.contact = contact,
            this.type = type

    }

}
const college1 = new College("M.S.Bidve Engineering college", "Latur", "02382 221 846", "Private");
const college2 = new College("Walchand college of Engineering", "Sangli", "0233 230 0383", "Autonomous");
const college3 = new College("ISB&M college of Engineering ", "Pune", "074200 18855", "Private");
const college4 = new College("COEP", "Pune", "020 2550 7000", "Autonomous");
traverseObject(college1);
traverseObject(college2);
traverseObject(college3);
traverseObject(college4);

function traverseObject(collegeObject) {
    console.log("College Details are:");
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key},${element}`);

        }
    }
}