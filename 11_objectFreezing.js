const person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

Object.freeze(person); // Freeze an object

person.age = 67; // Update not allowed as person object is freezed
delete person.city; // // Delete not allowed as person object is freezed
person.pin = 4445566; // Add not allowed as person object is freezed

console.table(person);