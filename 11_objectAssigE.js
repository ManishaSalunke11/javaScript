let sbiBank = {
    bankName: "SBI",
    location: "Pune",
    accountNo: "3497509874",
    ifsc: "SBI05096745",
    interestRate: "7.24",
    showDetails1: function() {
        console.log(`Object1 details are:${sbiBank.bankName},${sbiBank.location},${sbiBank.accountNo},${sbiBank.ifsc},${sbiBank.interestRate}`);
    }
}
sbiBank.showDetails1();

let axisBank = {
    bankName: "Axis",
    location: "Mumbai",
    accountNo: "9878457483",
    ifsc: "AXIS98758754",
    interestRate: "7.21",
    showDetails2: function() {
        console.log(`Object2 details are:${axisBank.bankName},${axisBank.location},${axisBank.accountNo},${axisBank.ifsc},${axisBank.interestRate}`);
    }
}
axisBank.showDetails2();

let hdfcBank = {
    bankName: "HDFC",
    location: "Latur",
    accountNo: "7687543859",
    ifsc: "HDFC98758754",
    interestRate: "7.20",
    showDetails3: function() {
        console.log(`Object3 details are:${hdfcBank.bankName},${hdfcBank.location},${hdfcBank.accountNo},${hdfcBank.ifsc},${hdfcBank.interestRate}`);
    }
}
hdfcBank.showDetails3();

let yesBank = {
    bankName: "YES",
    location: "Kolhapur",
    accountNo: "345457984554",
    ifsc: "YESK98758754",
    interestRate: "7.19",
    showDetails3: function() {
        console.log(`Object3 details are:${yesBank.bankName},${yesBank.location},${yesBank.accountNo},${yesBank.ifsc},${yesBank.interestRate}`);
    }
}
yesBank.showDetails3();