const sizeControl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

sizeControl.addEventListener('input', handleTextSize);

function handleTextSize(evt) {
  span.style.fontSize = `${evt.target.value}px`;
}
