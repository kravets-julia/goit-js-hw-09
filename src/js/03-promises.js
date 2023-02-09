import Notiflix from 'notiflix'
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form')
const inputDelayEl = document.querySelector('input[name="delay"]')
const inputStepEl = document.querySelector('input[name="step"]')
const inputAmounEl = document.querySelector('input[name="amount"]')

const btnSubmitEl = document.querySelector('button')
btnSubmitEl.addEventListener('click', onSubmit)

let delay=0

function onSubmit(e) {
    e.preventDefault();
    const firstDelay = Number(inputDelayEl.value)
    const stepDelay = Number(inputStepEl.value)
    const amount = Number(inputAmounEl.value)
   
    for (let position = 1; position <= amount; position+=1) {
         delay = firstDelay + stepDelay*(position-1)
        
         createPromise(position, delay).then((result) => {
          Notiflix.Notify.success(result)}).catch((error) => { Notiflix.Notify.failure(error)})
      }
      formEl.reset()
}

function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }, delay)
    })
  }