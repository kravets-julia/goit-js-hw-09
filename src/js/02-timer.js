import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.getElementById('datetime-picker')
const startBtnEl = document.querySelector('button[data-start]')
console.log(inputEl)



startBtnEl.disabled = 'true';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      const day = Date.now()
      console.log(day)

      if (selectedDates[0]<day){
       window.alert("Please choose a date in the future")
      }
      else {
        startBtnEl.disabled = false;
      }
      
       intervalId = setInterval (() => {
        const deltaTime = selectedDates[0].getTime() - day 
       
    const time = convertMs(deltaTime)}
    , 1000)
    console.log(time)
    },
  
  };

const fp = flatpickr('#datetime-picker', options)

// const fp = flatpickr("#datetime-picker", options); // flatpickr




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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


 