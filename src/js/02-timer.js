
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.getElementById('datetime-picker')
const startBtnEl = document.querySelector('button[data-start]')
const daysOutputEl = document.querySelector('span[data-days]')
const hoursOutputEl = document.querySelector('span[data-hours]')
const minutesOutputEl = document.querySelector('span[data-minutes]')
const secondsOutputEl = document.querySelector('span[data-seconds]')
console.log(minutesOutputEl)
const timerEl = document.querySelector('.timer')


let selectedDay = null


startBtnEl.disabled = 'true';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      console.log(selectedDates[0]);
 selectedDay = selectedDates[0];
    if (selectedDates[0]<options.defaultDate){
       window.alert("Please choose a date in the future");
       return
      }
      else {
        startBtnEl.disabled = false;
      }
    }   
   };


   flatpickr('#datetime-picker', options)

const timer = {
  intervalId: null,
  isActive: false,

  start(){
    if (this.isActive){
      return
    }
    const day = Date.now()
    console.log(day)
    this.isActive = true
startBtnEl.disabled = 'false'

  this.intervalId = setInterval(()=> {
    const currentTime = Date.now()
     const deltaDay = selectedDay - currentTime;
     console.log(deltaDay)

     if ( deltaDay < 0 )
     {clearInterval(this.intervalId);
     this.isActive = false;
   startBtnEl.disabled = true;
  inputEl.disabled = false;
  window.alert('Time is over!')
return}

     const timeComponents = convertMs(deltaDay);
  updateFace(timeComponents);
  }, 1000)

}  
}


startBtnEl.addEventListener('click', timer.start)

function addLeadingZero(value){
  return String(value).padStart(2, '0')
}

function updateFace({ days, hours, minutes, seconds }){
  daysOutputEl.textContent = addLeadingZero(`${days}`);
  hoursOutputEl.textContent = addLeadingZero(`${hours}`);
  minutesOutputEl.textContent = addLeadingZero(`${minutes}`);
 secondsOutputEl.textContent = addLeadingZero(`${seconds}`);
}

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