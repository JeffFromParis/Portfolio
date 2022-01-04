/*
This part is about computing the time elapsed since my date of birth
*/
const ageValue = document.getElementById("age-value");
const ageUnit = document.getElementById("age-unit");
const birthdate = new Date(1985,5,6,16,24);
let now = new Date();
const intlNumberFormatter = new Intl.NumberFormat("en-US");

//console.log('Birthdate is ' + birthdate);
//console.log('Today is ' + now);

//Compute the number of seconds between a date and the current time
function secondsDiff(date) {
    now = new Date();
    let millisecondDiff = now.getTime() - date.getTime();
    let secDiff = Math.floor(millisecondDiff / 1000);
    
    //console.log('Age in seconds is now ' + secDiff);
    
    if(ageUnit.innerText == "seconds"){
        ageValue.innerText=intlNumberFormatter.format(secDiff);
    }

    return secDiff;
}

//Compute the number of minutes between two dates
function minutesDiff(date) {
    let seconds = secondsDiff(date);
    let minutesDiff = Math.floor( seconds / 60 );
    
    //console.log('Age in minutes is now ' + minutesDiff);
    
    if(ageUnit.innerText == "minutes"){
        ageValue.innerText=intlNumberFormatter.format(minutesDiff);
    }

    return minutesDiff;
}

//Compute the number of hours between two dates
function hoursDiff(date) {
    let minutes = minutesDiff(date);
    let hoursDiff = Math.floor( minutes / 60 );
    
    console.log('Age in hours is now ' + hoursDiff);
    
    if(ageUnit.innerText == "hours"){
        ageValue.innerText=intlNumberFormatter.format(hoursDiff);
    }

    return hoursDiff;
 }

//Compute the number of days between two dates
function daysDiff(date) {
    let hours = hoursDiff(date);
    let daysDiff = Math.floor( hours / 24 );

    console.log('Age in days is now ' + daysDiff);
    
    if(ageUnit.innerText == "days"){
        ageValue.innerText=intlNumberFormatter.format(daysDiff);
    }
    
    return daysDiff;
}

//Compute the number of weeks between two dates
function weeksDiff(date) {
    let days = daysDiff(date);
    let weeksDiff = Math.floor( days / 7 );

    console.log('Age in weeks is now ' + weeksDiff);
    
    if(ageUnit.innerText == "weeks"){
        ageValue.innerText=intlNumberFormatter.format(weeksDiff);
    }

    return weeksDiff;
}


function yearsDiff(date) {

    //calculate month difference from current date in time  
    let month_diff = Date.now() - date.getTime();  
      
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);

    //console.log('Age in years is now ' + age);

    if(ageUnit.innerText == "years"){
        console.log('updating the age value');
        ageValue.innerText=intlNumberFormatter.format(age);
    }

    return age; 
}

//Compute the number of month between two dates
function monthsDiff(date) {
    let years = yearsDiff(date);
    now = new Date();

    const currentMonth = now.getMonth();
    const dobMonth = date.getMonth();
    let monthsDiff = 0;
    console.log('current month : ' + currentMonth);
    console.log('birth month : ' + dobMonth);

    if (currentMonth >= dobMonth)  
        //get months when current month is greater  
        monthsDiff = years * 12 + currentMonth - dobMonth;  
    else {  
        monthsDiff = (years+1) * 12 + currentMonth - dobMonth;  
    }  
    
    if(ageUnit.innerText == "months"){
        ageValue.innerText=intlNumberFormatter.format(monthsDiff);
    }

    return monthsDiff;
}

//setInterval is used to repeat the function according to a parameter (in ms)
const differenceInSeconds=setInterval(secondsDiff,1000,birthdate);
const differenceInMinutes=setInterval(minutesDiff,60000,birthdate);
const differenceInHours=setInterval(hoursDiff,3600000,birthdate);
const differenceInYears=yearsDiff(birthdate);

ageValue.innerText = intlNumberFormatter.format(differenceInYears);
ageUnit.innerText = "years";  

$(document).ready(function(){
    $('input[name=unit]').on('change', function(){
    var n = $(this).val();
    $('#age-unit').html($(this).val());
    switch(n)
    {
            case 'years':
                yearsDiff(birthdate);
            break;
            case 'months':
                monthsDiff(birthdate);
            break;
            case 'weeks':
                weeksDiff(birthdate);
            break;
            case 'days':
                daysDiff(birthdate);
            break;
            case 'hours':
                hoursDiff(birthdate);
            break;
            case 'minutes':
                minutesDiff(birthdate);
            break;
            case 'seconds':
                secondsDiff(birthdate);
            break;
            default:
                $('#age-value').html(differenceInYears);
            break;
        }
    });
});