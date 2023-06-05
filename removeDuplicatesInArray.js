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

let newChar = "";
const arrayWords = str.split(" ");
for (const element of arrayWords) {
    for (let index = 0; index < element.length; index++) {
        let char = "";
        if (index == 0 || index == element.length - 1) {
            char = element[index].toUpperCase();
        } else {
            char = element[index];
        }
        newChar = newChar + char;


    }
    newChar = newChar + " ";
}
console.log(newChar);