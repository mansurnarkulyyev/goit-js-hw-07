import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
// listEl.addEventListener("click", closeModal)

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



// function closeModal(event) {
//     event.preventDefault();
// new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
// });

    // console.log(event.target);
// }

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });