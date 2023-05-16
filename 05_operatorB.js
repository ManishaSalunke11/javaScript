var greaterNumber = function findGreaterNo(num1, num2) {
    console.log("Given numbers are num1=", num1, "num2=", num2);
    var condition = num1 > num2 ? "num1 is greater" : "num2 is greater";
    console.log(condition);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
var isEvenOrOddNum = function findOddEvenNo(num) {
    var condition = num % 2 == 0 ? "even" : "odd";
    console.log("Given number ", num, "is:", condition);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

var wordLength = function findLengthOddOrEven(string) {
    console.log("Given string is:", string);
    var newLength = string.length % 2 == 0 ? "length of this string is even" : "length of this string is odd";
    console.log(newLength);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");