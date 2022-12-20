import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const listEl = document.querySelector(".gallery");

function renderGalleryList(array) {
    const listMarkup = array
        .map(({ preview, original, description } = {}) => {
            return `<li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li> `;
        })
        .join("");
    listEl.insertAdjacentHTML("beforeend", listMarkup);
    console.log(listMarkup);
}

renderGalleryList(galleryItems);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

