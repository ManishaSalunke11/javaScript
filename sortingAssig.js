const array = [10, 5, 'a', 'b', 'h', 11];
const numSort = (n1, n2) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 - n2;
    } else if (typeof n1 === 'number' && typeof n2 !== 'number') {
        return -1;
    } else if (typeof n1 !== 'number' && typeof n2 === 'number') {
        return 1;
    } else {
        return n1 > n2 ? 1 : -1;
    }
}
array.sort(numSort);
numbersArray = [];
alphabetsArray = [];
array.forEach((element) => {
    if (typeof element === "number") {
        numbersArray.push(element);
    }
});
console.log(`Sorted array of numbers is:`);
console.log(numbersArray);
array.forEach((element) => {
    if (typeof element !== "number") {
        alphabetsArray.push(element);
    }
});
console.log(`Sorted array of alphabets is:`);
console.log(alphabetsArray);