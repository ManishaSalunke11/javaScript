console.log("-------Arrow function without args and return values-------");
let display = () => {
    console.log(`Good Morning, Today is Monday`);
}
display();

console.log(`-----Arrow function with arguments and no return value------`);
let multiplication = (num1, num2, num3) => {
    console.log(`Multiplication of given numers is:${num1*num2*num3}`);
}
multiplication(5, 5, 2);
let num3 = 1;
multiplication(10, 4, num3);

console.log(`------Arrow function with arguments and return value------`);
let add = (num1, num2, num3, num4, num5) => {
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
}
let addNumbers = add(100, 100, 200, 349, 756);
console.log(`Addition of given numbers is: ${addNumbers}`);

let addStrings = add("I am", " learning", " ES6", " featurs", " in depth");
console.log(`Addition of given strings is: ${addStrings}`);