function countCharA(str) {
    var count = 0;
    for (let index = 1; index < str.length; index++) {

        if (str.charAt(index) == "a" || str.charAt(index) == "A") {
            count = count + 1;

        }

    }
    return count;

}
string1 = countCharA("I Am Learning JavaScript, The Language of Internet");
console.log(`count of A or a is: ${string1}`);
string2 = countCharA("My Favourite movie is  LAggAn");
console.log(`count of A or a is: ${string2}`);