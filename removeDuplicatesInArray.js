const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log("Given array is:");
console.log(arrayNum);

function removeDuplicates(arrayNum) {
    let unique = [];
    for (i = 0; i < arrayNum.length; i++) {
        if (unique.indexOf(arrayNum[i]) === -1) {
            unique.push(arrayNum[i]);
        }
    }
    return unique;
}
console.log("Array after removing duplicates is:");
console.log(removeDuplicates(arrayNum));

const str = "How are you mate";
console.log("Given string is:");
console.log(str);
console.log("Expected output is:");