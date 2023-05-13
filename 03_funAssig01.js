function myFunction1() {
    console.log("This is my first javascript function without arguments & return type!");
}
myFunction1();

function myFunction2() {
    console.log("This is my second javascript function without arguments & return type!");
}
myFunction2();

function personalDetails(firstName, lastName, collegeName) {
    firstName = "Manisha";
    lastName = "Salunke";
    collegeName = "ISB&M COE";
    console.log(" First Name:", firstName, "\n Last Name:", lastName, "\n College Name:", collegeName);
}
personalDetails();

var name1 = "Virat";
var name2 = "Anushka";

var num1 = "1000";
var num2 = "2000";

function swapValuesDude(valueOne, valueTwo) {
    console.log("Values before swapping: ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("Values after swapping: ", valueOne, valueTwo);
}
swapValuesDude(name1, name2);
swapValuesDude(num1, num2);

var n1 = 10.23;
var n2 = 600;
var n3 = 40;

var s1 = "Hello,";
var s2 = "Good";
var s3 = " Morning";

function addThreeValues(first, second, third) {
    console.log("Addition is:", first + second + third);
}
addThreeValues(n1, n2, n3);
addThreeValues(s1, s2, s3);