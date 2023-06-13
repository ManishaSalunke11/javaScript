function isPalindrome(str) {
    const lengthOfStr = str.length;
    for (let i = 0; i < lengthOfStr / 2; i++) {

        if (str[i] !== str[lengthOfStr - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log("Given string is:madam");
const result1 = isPalindrome("madam");
console.log(result1);
console.log("Given string is:141");
const result2 = isPalindrome(141);
console.log(result2);
console.log("Given string is:Sunday");
const result3 = isPalindrome("Sunday");
console.log(result3);
console.log("Given string is:mom");
const result4 = isPalindrome("mom");
console.log(result4);
console.log("Given string is:listen");
const result5 = isPalindrome("listen");
console.log(result5);
console.log("Given string is:dad");
const result6 = isPalindrome("dad");
console.log(result6);