const arrayNumbers = [20, 11, 40, 25, 11, 9, 31, 60, 2, 19];
const arratTrans1 = arrayNumbers.map((element) => {
    return element + 10;
});
console.log("new array adding 10 into each element of given array is:");
console.log(arratTrans1);
console.log("new array having square of each element of given array is:");
const arratTrans2 = arrayNumbers.map((element) => {
    return element * element;
});
console.log(arratTrans2);
console.log("new array of adding index value into it's corresponding array element is:");
const arratTrans3 = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(arratTrans3);