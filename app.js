const outPutDays = document.getElementById('output-day');
const outPutMonths = document.getElementById('output-month');
const outPutYears = document.getElementById('output-year');


// let day = prompt('please enter a day')
// let month = prompt('please enter a month')
// let year = prompt('please enter a year')



let birthDay = new Date(`${year}-${month}-${day}`)
let today = new Date()

let differenceInDays = today.getDate() - birthDay.getDate()
let differenceInMonths = today.getMonth() - birthDay.getMonth()
let differenceInYears = today.getFullYear() - birthDay.getFullYear()

if(differenceInMonths < 0 || (differenceInMonths === 0 && differenceInDays < 0)){
    differenceInMonths = 12 + differenceInMonths;
    differenceInYears--;
}

outPutDays.textContent = differenceInDays + ' days'
outPutMonths.textContent = differenceInMonths + ' months'
outPutYears.textContent = differenceInYears + ' years'

// const differenceInMilliseconds = endDate - startDate;
// const differenceInYear = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
// const differenceInMonth =  (differenceInYear % 1) * 365.25 / 30.44
// const differenceInDay = differenceInMonth % 1 * 30.44
// console.log(Math.round(differenceInYear));
// console.log(Math.floor(differenceInMonth));
// console.log(Math.round(differenceInDay))



