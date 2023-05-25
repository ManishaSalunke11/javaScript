const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Length of array is:${arrayNumbers.length}`);
console.log(`First Element is:${arrayNumbers[0]}`);
console.log(`Last Element is:${arrayNumbers[10]}`);
var thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Third Last Element is:${thirdLastElement}`);
console.log(`Even numbers in array are:`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 == 0) {
        console.log(arrayNumbers[index]);


    }
}

console.log(`Odd numbers in array are:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 != 0) {
        console.log(arrayNumbers[index]);
    }

}
console.log(`Even positioned numbers are:`);
sumOfEven = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
        console.log(arrayNumbers[index]);
        sumOfEven += arrayNumbers[index];

    }

}
console.log(`Sum of even positioned numbers is:${sumOfEven}`);

console.log(`Odd positioned numbers are:`);
sumOfOdd = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 != 0) {
        console.log(arrayNumbers[index]);
        sumOfOdd += arrayNumbers[index];

    }

}
console.log(`Sum of odd positioned numbers is:${sumOfOdd}`);

sumOfAll = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sumOfAll += arrayNumbers[index];
}
console.log(`Sum of all numbers is:${sumOfAll}`);

console.log(`The numbers in array which are multiple of 5 are:`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 5 == 0) {
        console.log(arrayNumbers[index]);


    }
}
var availNumber1 = arrayNumbers.includes(115, 0);
console.log(`Is number 115 available in arrayNumbers:${availNumber1}`);

var availNumber2 = arrayNumbers.includes(23, 0);
console.log(`Is number 23 available in arrayNumbers:${availNumber2}`);

arrayNumbers.splice(3, 0, 55, 66);
console.log(`After inserting 55,66 before index 3 array is:${arrayNumbers}`);

arrayNumbers.splice(4, 3);
console.log(`After deleting 3 elements starting from index 4 array is:${arrayNumbers}`);