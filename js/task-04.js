// const counter = document.querySelector('#counter')
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let value = 0;

decrementBtn.addEventListener('click', handleDecBtn);
incrementBtn.addEventListener('click', handleIncBtn);

function handleDecBtn() {
  value -= 1;
  counterValue.textContent = value;
}

function handleIncBtn() {
  value += 1;
  counterValue.textContent = value;
}
