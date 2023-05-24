function factorialOfNum(num) {
    if (num == null || num == undefined || num == NaN) {
        console.log(`Invalid data: ${num}`);

    } else {
        if (num == 0) {
            console.log(`factorial of ${num} is: 1`);
        }
        let factorial = 1;
        for (let index = num; index >= 1; index--) {
            factorial = factorial * index;


        }
        return factorial;
    }


}
var factOf5 = factorialOfNum(5);
console.log(`factorial of 5 is: ${factOf5}`);

var factOf3 = factorialOfNum(3);
console.log(`factorial of 3 is: ${factOf3}`);

var factOfNull = factorialOfNum(null);

var factOf8 = factorialOfNum(8);
console.log(`factorial of 8 is: ${factOf8}`);

var factOfUndefined = factorialOfNum(undefined);

var factOf9 = factorialOfNum(9);
console.log(`factorial of 9 is: ${factOf9}`);

var factOf0 = factorialOfNum(0);