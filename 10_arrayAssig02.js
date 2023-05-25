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