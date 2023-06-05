const textInput = document.querySelector('#validation-input');
const textLength = document.querySelector('[data-length]');

textInput.addEventListener('blur', e => {
  if (e.target.value.length === Number(textLength.dataset.length)) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
