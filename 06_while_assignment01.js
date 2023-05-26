var num1 = 5;
console.log("numbers from 5 to 15 incrementing by 1:");
while (num1 <= 15) {
    console.log(num1);
    num1 += 1;
}

var num1 = 50;
console.log("numbers from 50 to 40 decreamenting by 1:");
while (num1 >= 40) {
    console.log(num1);
    num1 -= 1;

}

console.log("First 15 odd numbers:");
let oddnum = 0,
    count1 = 0;
while (count1 < 15) {
    if (oddnum % 2 == 1) {
        console.log(oddnum);
        count1 = count1 + 1.
    }
    oddnum++;
}

console.log("First 10 even numbers:");
let evennum = 0,
    count2 = 0;
while (count2 < 10) {
    if (evennum % 2 == 0) {
        console.log(evennum);
        count2 = count2 + 1.
    }
    evennum++;
}

var tableOf_5 = 5;
console.log("Table of 5:");
while (tableOf_5 <= 50) {
    console.log(tableOf_5);
    tableOf_5 += 5;
}

var tableOf_10 = 10;
console.log("Table of 10:");
while (tableOf_10 <= 100) {
    console.log(tableOf_10);
    tableOf_10 += 10;
}

var reverseTableOf_10 = 100;
console.log("Table of 10 in reverse order:");
while (reverseTableOf_10 >= 10) {
    console.log(reverseTableOf_10);
    reverseTableOf_10 -= 10;
}