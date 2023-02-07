const DELAY = 1000;
let timeoutId = null;

const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')

startBtnEl.addEventListener('click', onStartBtnColorMaker)
stopBtnEl.addEventListener('click', onStopBtnColorMaker)


function onStartBtnColorMaker(){
    timeoutId = setInterval (() => {
    bodyEl.style.backgroundColor = getRandomHexColor()
}, DELAY, DELAY);
startBtnEl.disabled = true;
stopBtnEl.disabled = false
}

function onStopBtnColorMaker () {
clearInterval (timeoutId);
startBtnEl.disabled = false;
stopBtnEl.disabled = true
}
console.log(bodyEl)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
