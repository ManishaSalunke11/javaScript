'use strict'
const array = [11, 22, 33, 44, 55, 66];
console.log(array);
console.log(...array);

const array2 = [...array];

const person = {
    name: "Stew",
    age: 57,
    country: "US"
}

const person2 = {...person};
console.log(person2);

function show(adharNum, role, ...parameters) {
    console.log(adharNum, role, parameters);
  }
  show(11223344, "CEO", 23, "Elon", "US");

  function division(num1, num2=1){ // let num1 = 7, let num2;
    if(num2==0){
        num2=1;
    } 
    console.log(num1/num2);
}
division(10, 5);
division(67, 0);
division(7);