/*
This part is about computing the time elapsed since my date of birth
*/
const ageValue = document.getElementById("age-value");
const ageUnit = document.getElementById("age-unit");;
const birthdate = new Date(1985,7,6,16,34);
const now = new Date();
const intlNumberFormatter = new Intl.NumberFormat("en-US");
const btn = document.querySelector('#btn');

console.log('Birthdate is ' + birthdate);
console.log('Today is ' + now);

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

ageValue.innerText = intlNumberFormatter.format(differenceInYears);
ageUnit.innerText = "years";  


$(document).ready(function(){
    $('input[name=unit]').on('change', function(){
    var n = $(this).val();
    $('#age-unit').html($(this).val());
    switch(n)
    {
            case 'years':
                $('#age-value').html(differenceInYears);
                // $('#age-unit').html('years');
                break;
            case 'months':
                $('#age-value').html(differenceInMonths);
                // $('#age-unit').html('months');
                break;
            case 'weeks':
                $('#age-value').html(differenceInWeeks);
                // $('#age-unit').html('months');
                break;
            case 'days':
                $('#age-value').html(differenceInDays);
                // $('#age-unit').html('months');
                break;
            case 'hours':
                $('#age-value').html(differenceInHours);
                // $('#age-unit').html('months');
                break;
            case 'minutes':
                $('#age-value').html(differenceInMinutes);
                // $('#age-unit').html('months');
            break;
            case 'seconds':
                $('#age-value').html(differenceInSeconds);
                // $('#age-unit').html('months');
                 break;
            default:
                $('#age-value').html(differenceInYears);
                // $('#age-unit').html('years');
                break;

        }
    });
});