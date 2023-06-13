function isPalindrome(str) {
    const lengthOfStr = str.length;
    for (let i = 0; i < lengthOfStr / 2; i++) {

        if (str[i] !== str[lengthOfStr - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

isPalindrome('madam');