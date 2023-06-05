function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
});
