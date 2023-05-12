function stringHandsOn() {
    var givenString = "   Hey you are doing good, keep it up   ";
    console.log(givenString);
    console.log("Length of the given string:", givenString.length);
    var newLength = givenString.trim();
    console.log("After removing leading and trailing extra spaces, the length is:", newLength.length);
    console.log("Number of extra spaces count which are removed:", givenString.length - newLength.length);
    var first = newLength.charAt(0);
    var last = newLength.charAt(newLength.length - 1);
    console.log("First and last characters are:", first, last);
}
stringHandsOn();