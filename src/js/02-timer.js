import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.getElementById('datetime-picker')
const startBtnEl = document.querySelector('button[data-start]')
console.log(inputEl)

const day = Date.now()
console.log(day)
let selectedDay = null

startBtnEl.disabled = 'true';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      console.log(selectedDates[0]);
 selectedDay = selectedDates[0]
    if (selectedDates[0]<options.defaultDate){
       window.alert("Please choose a date in the future");
       return
      }
      else {
        startBtnEl.disabled = false;
      }
    },
    };


flatpickr('#datetime-picker', options)

setInterval(()=> {
   const deltaDay = selectedDay - day;
   const time =  convertMs(deltaDay)
})


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }