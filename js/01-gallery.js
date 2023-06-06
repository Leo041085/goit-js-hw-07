import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const cardList = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join('');

cardList.insertAdjacentHTML('afterbegin', galleryList);
cardList.addEventListener('click', handlerCardListClick);

function handlerCardListClick(evt) {
    evt.preventDefault();
}