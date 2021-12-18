/*
This part is about computing the time elapsed since my date of birth
*/
const ageInYearsContainer = document.getElementById("age-in-years-container");
const birthdate = new Date(1985,6,7);
const now = new Date();
const intlNumberFormatter = new Intl.NumberFormat("en-US");

//Compute the number of seconds between two dates
function secondsDiff(date1, date2) {
    let millisecondDiff = date2 - date1;
    let secDiff = Math.floor(millisecondDiff / 1000);
    return secDiff;
}

//Compute the number of minutes between two dates
function minutesDiff(date1, date2) {
    let seconds = secondsDiff(date1, date2);
    let minutesDiff = Math.floor( seconds / 60 );
    return minutesDiff;
}

//Compute the number of hours between two dates
function hoursDiff(date1, date2) {
    let minutes = minutesDiff(date1, date2);
    let hoursDiff = Math.floor( minutes / 60 );
    return hoursDiff;
 }

//Compute the number of days between two dates
function daysDiff(date1, date2) {
    let hours = hoursDiff(date1, date2);
    let daysDiff = Math.floor( hours / 24 );
    return daysDiff;
}

//Compute the number of weeks between two dates
function weeksDiff(date1, date2) {
    let days = daysDiff(date1, date2);
    let weeksDiff = Math.floor( days/ 7 );
    return weeksDiff;
}

//Compute the number of years between two dates
function yearsDiff(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}

//Compute the number of month between two dates
function monthsDiff(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let years = yearsDiff(date1, date2);
    let months =(years * 12) + (date2.getMonth() - date1.getMonth()) ;
    return months;
}

const differenceInSeconds=secondsDiff(birthdate,now);
const differenceInMinutes=minutesDiff(birthdate,now);
const differenceInHours=hoursDiff(birthdate,now);
const differenceInDays=daysDiff(birthdate,now);
const differenceInWeeks=weeksDiff(birthdate,now);
const differenceInYears=yearsDiff(birthdate,now);
const differenceInMonths=monthsDiff(birthdate,now);

ageInYearsContainer.innerText = intlNumberFormatter.format(differenceInYears);