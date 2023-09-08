const dayOfWeekElement = document.querySelector('#dayOfWeek');
const utcTimeElement = document.querySelector('#currentUTCTime');
const currentDate = new Date().toDateString();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.addEventListener('load', (evt) => {
    dayOfWeekElement.innerText = days[new Date().getDay()];
    utcTimeElement.innerText = Date.parse(currentDate);
})
