import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
listEl.addEventListener("click", closeModal)
// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
function renderGalleryList(array) {

    const listMarkup = array
        .map(({ preview, original, description } = {}) => {
            return ` <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
        })
        .join("");
    listEl.insertAdjacentHTML("beforeend", listMarkup);
    console.log(listMarkup);

}

renderGalleryList(galleryItems);


function closeModal(event) {
    event.preventDefault();
    new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    console.log(event.target);
}