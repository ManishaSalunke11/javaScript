var word = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }

}
console.log(`count total vowels:${count}`);

var sumOfCube = function(num) {
    var sum = 0;
    for (let index = 1; index <= num; index++) {
        sum = sum + index * index * index;

    }
    console.log(`Sum of cube of numbers is:${sum}`);
}
sumOfCube(1);
sumOfCube(2);

sumOfCube(3);

sumOfCube(4);

sumOfCube(5);



function oddPositioChars(givenStr) {
    var str = "";
    for (let index = 0; index < givenStr.length; index++) {
        var char = givenStr.charAt(index);
        if (index % 2 != 0 && char != " ") {
            str = str + char;
        }

    }
    console.log(`${str}`);
}
oddPositioChars("Hard work always pays back");
oddPositioChars("Soon I will be Angular IT champ");