var leapYearExpr = function checkLeapYear(leapYear) {
    if (leapYear == null || leapYear == undefined) {
        console.log(`${leapYear} : Please provide valid input`);
    } else {
        if (leapYear == " " || leapYear == NaN) {
            console.log(`${leapYear} : Please provide valid input`);
        } else {
            if (leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0) {
                console.log(`${leapYear} : is a leap year`);
            } else {
                console.log(`${leapYear} : is not a leap year`);
            }

        }

    }

}
leapYearExpr(2020);
leapYearExpr(1999);
leapYearExpr(1600);
leapYearExpr(2022);
leapYearExpr(1945);
leapYearExpr(null);
leapYearExpr("Twenty Twenty");
leapYearExpr(undefined);
leapYearExpr(NaN);
leapYearExpr(1750);