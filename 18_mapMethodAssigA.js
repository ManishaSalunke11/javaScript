const arrayNumbers = [20, 11, 40, 25, 11, 9, 31, 60, 2, 19];
const arrayTrans1 = arrayNumbers.map((element) => {
    return element + 10;
});
console.log("new array adding 10 into each element of given array is:");
console.log(arrayTrans1);
console.log("new array having square of each element of given array is:");
const arrayTrans2 = arrayNumbers.map((element) => {
    return element * element;
});
console.log(arrayTrans2);
console.log("new array of adding index value into it's corresponding array element is:");
const arrayTrans3 = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(arrayTrans3);