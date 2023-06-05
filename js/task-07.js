const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("input", handleTextSize)

function handleTextSize(evt) {
    span.style.fontSize = input.value + "px"
}
