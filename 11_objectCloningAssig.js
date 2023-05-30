let bankSbi = {
    bankName: "SBI",
    Founded: "1 July 1955",
    Headquarters: "Mumbai",
    Formerly: "Imperial Bank of India"
}
let bankLocation = {
    street: "Mulashi Rd",
    city: "Pune",
    pin: "412108"
}

let clonedBankSbi = {

}
let clonedBankLocation = {

}
Object.assign(clonedBankSbi, bankSbi);
Object.assign(clonedBankLocation, bankLocation);
console.log("Cloned Object1 is:");
console.table(clonedBankSbi);

console.log("Cloned Object2 is:");
console.table(clonedBankLocation);

let rateOfInterest = {
    homeLoanInterest: "8.50",
    personalLoanInterest: "11.00",
    dueInterest: "8.60"
}

let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log("After merging sbiDetails object properties are:");
console.table(sbiDetails);

console.log("-----Traversing of this Merged Object is as follow:------")
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}