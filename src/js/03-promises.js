import { Notify } from 'notiflix'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form')
const inputDelayEl = document.querySelector('input[name="delay"]')
const inputStepEl = document.querySelector('input[name="step"]')
const inputAmounEl = document.querySelector('input[name="amount"]')

const btnSubmitEl = document.querySelector('button')
btnSubmitEl.addEventListener('submit', onSubmit)

console.log(inputDelayEl)
console.log(inputAmounEl)
console.log(inputStepEl)

let MAIN_DELAY = null
console.log(MAIN_DELAY)
 
function onSubmit (e) {
  e.preventDefault();
   const FIRST_DELAY = inputDelayEl[0].value
  const STEP_DELAY = inputStepEl[0].value
  const MAX_AMOUNT = inputAmounEl[0].value
 
// let delay = 0;
for (let position = 1; position <= MAX_AMOUNT; position+=1) {
 let delay = FIRST_DELAY + STEP_DELAY*(position-1);
 console.log(delay)
 MAIN_DELAY = delay
  
  createPromise(position, delay).then(({position, delay}) => {
   Notify.success
    (`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({position, delay}) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  })
  }
  formEl.reset()
}

  function createPromise (position, delay) {
     const shouldResolve = Math.random() > 0.3;
  return new Promise (( resolve, reject) => {
 
  setTimeout(() => {
  if (shouldResolve) {
    resolve ({position, delay})
    // Fulfill
  } else {
    reject ({position, delay})
    // Reject
  }

}, MAIN_DELAY);
}
)}


// createPromise(position, delay)


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });