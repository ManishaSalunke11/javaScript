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
    var totalWords = newLength.split(" ");
    console.log("Total number of words: ", totalWords.length);
    var goodIndex = givenString.indexOf("good");
    console.log("Index of good in given string is:", goodIndex);
    var stringAtIndex_22 = newLength.substring(22);
    console.log("subString at index 22 is:", stringAtIndex_22);
    var sliceAtIndex_22 = newLength.slice(22);

    console.log("slice at index 22 is:", sliceAtIndex_22)
    var stringAfterThirdStep1 = newLength.endsWith("up");
    console.log("Does string ends with up?", stringAfterThirdStep1);

    var stringAfterThirdStep2 = newLength.startsWith("Hey");
    console.log("Does string starts with Hey?", stringAfterThirdStep2);
}
stringHandsOn();