function squareOfWordLength(string) {
    console.log("Given string:", string);
    square = string.length * string.length;
    console.log("Square of words in this string is:", square);
    return (square);

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

function useOfOperatorsOnString() {
    var givenString = "I am Angular Developer";
    console.log("Given string is:", givenString);
    console.log("Length of string is:", givenString.length);
    var split = givenString.split(" ");
    console.log("words are:", split);
    console.log("String length divided by total no. of words is:", givenString.length / split.length);
    console.log("String length multiplied by total no. of words is:", givenString.length * split.length);
}
useOfOperatorsOnString();