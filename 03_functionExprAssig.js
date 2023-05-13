var squares = function(a, b) {
    return a * b;
}
var m1 = squares(5, 5);
var m2 = squares(6, 6);
var m3 = squares(25, 25);
var m4 = squares(100, 100);
console.log("Squre of 5 is:", m1);
console.log("Squre of 6 is:", m2);
console.log("Squre of 25 is:", m3);
console.log("Squre of 100 is:", m4);
console.log("Type of function is:", typeof squares);

var LB = function(x, y) {
    return (x * y);
}
var areaOfRectangle = LB(499, 917);
console.log("Area of Rectangle is:", areaOfRectangle);

var swapValues = function(value1, value2) {
    console.log("Values before swapping: \n value1=", value1, " & value2=", value2);
    temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("Values after swapping: \n value1=", value1, " & value2=", value2);
}
swapValues("Virat", "Anushka");
swapValues("1000", "2000");

var steps = function(value) {
    console.log("Total characters of given string are:", value.length);
    console.log("Character at index 6th is:", value.charAt(6));
    console.log("Character at index 11th is:", value.charAt(11));
    console.log("Last character is:", value.charAt(value.length - 1));
    console.log("First character is:", value.charAt(0));
    var split = value.split(" ");
    console.log("Square of total no. of words is:", split.length * split.length);

}
steps("JS the most popular language of internet");