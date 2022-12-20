import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector(".gallery");

function renderGalleryList(array) {

  const listMarkup = array
    .map(({ preview, original, description } = {}) => {
      return `<li class="gallery__item">
      <a class="gallery__link"
        href="${original}"  >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </li>`;
    })
    .join("");
  listEl.insertAdjacentHTML("beforeend", listMarkup);
  console.log(listMarkup);
}

renderGalleryList(galleryItems);

document.querySelector('.gallery').onclick = (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();

}

