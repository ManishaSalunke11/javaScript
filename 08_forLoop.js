// program for table of 5
for (let index = 5; index <= 50; index = index + 5) {
    console.log(index);
}
console.log("After loop");

for (let index = 100; index >= 80; index--) {
    console.log(index);
}

console.log("After loop");
// program for table of 7
for (let index = 7; index <= 70; index = index + 7) {
    console.log(index);
}
console.log("After loop");
// program for table of 19 in reverse order
for (let index = 190; index >= 19; index = index - 19) {
    console.log(index);
}
console.log("After loop");
//program for printing characters in string
var str = "javascript";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    console.log(char);
}

//program for printing characters in string in reverse order
var str = "javascript";
var reverseStr = "";
for (let index = 9; index >= 0; index--) {
    var char = str.charAt(index);
    reverseStr = reverseStr.concat(char);
    console.log(char);
}
console.log(reverseStr);

function reverseWord(word) {
    var reverseStr = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) {
        var char = word.charAt(index);
        reverseStr = reverseStr.concat(char);

    }
    console.log(reverseStr);
}
reverseWord("Javascript");
reverseWord("Google Chrome");
reverseWord("Developer");