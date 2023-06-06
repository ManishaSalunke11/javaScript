let arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
let negativeArray = [];
let sum = 0;
console.log("Elements with it's index are:");
arrayNumbers.forEach((element, index) => {
    console.log(index, element);
});
console.log("Positive numbers from given array are:");
arrayNumbers.forEach((element) => {
    if (element > 0) {
        console.log(element);
    }
});
arrayNumbers.forEach((element) => {
    if (element < 0) {
        negativeArray.push(element);
    }
});
console.log(`Negative numbers from given array are:${negativeArray}`);
console.log("Even numbers from given array are:");
arrayNumbers.forEach((element) => {
    if (element % 2 == 0) {
        console.log(element);
    }
});
arrayNumbers.forEach((element) => {
    sum += element;
})
console.log(`Sum of all elements from given array is:${sum}`);
console.log("Even indexed array values are:");
arrayNumbers.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(element);
    }
})