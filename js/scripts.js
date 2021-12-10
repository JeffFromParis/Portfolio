/*
This part is about computing the number seconds since my date of birth
*/
const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "07-06-1985";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);