const leapYears = function (year) {

    //%4==0 for first check (they are leap years)
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log('Leap year first check')
        return true
    } else {
        console.log('not leap year')
        return false
    }
    //%100==0 for second check (They are not leap years)
    //%400==0 only if it is 100%==0

};

leapYears(1600)
// Do not edit below this line
module.exports = leapYears;
