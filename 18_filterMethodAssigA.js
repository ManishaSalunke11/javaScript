const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const arrayGreaterThan50 = arrayNumbers.filter((element) => {
    return element > 50;
});
console.log(`numbers greater than 50 in given array are:- ${arrayGreaterThan50}`);
const arrayEven = arrayNumbers.filter((element) => {
    return element % 2 == 0;
});
console.log(`Even numbers in given array are:- ${arrayEven}`);
const arrayOdd = arrayNumbers.filter((element) => {
    return element % 2 != 0;
});
console.log(`Odd numbers in given array are:- ${arrayOdd}`);
const arrayMultipleOf_5 = arrayNumbers.filter((element) => {
    return element % 5 == 0;
});
console.log(`Multiple of 5 in given array are:- ${arrayMultipleOf_5}`);
const arrayOfBetween20And50 = arrayNumbers.filter((element) => {
    return element > 20 && element < 50;
});
console.log(`Multiple of 5 in given array are:- ${arrayOfBetween20And50}`);