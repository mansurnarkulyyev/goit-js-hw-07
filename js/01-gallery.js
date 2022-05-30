import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const listEl = document.querySelector(".gallery");

function renderGalleryList(array) {

  const listMarkup = array
    .map(({ preview, original, description } = {}) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
        
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
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
  basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
  console.log(event.target);
}











// const listEl = document.querySelector(".gallery");
// const modalEl = document.querySelector(".js-lightbox");
// const modalImgEl = document.querySelector(".lightbox__image");
// const buttonEl = document.querySelector(".lightbox__button");
// const ligthBoxEl = document.querySelector(".lightbox__overlay");

// function renderGallaryList(array) {
//   const listMarkup = array
//     .map(({ preview, original, description } = {}) => {
//       return `<li class="gallery__item">
//     <a
//       class="gallery__link"
//       href="${original}"
//     >
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </li>`;
//     })
//     .join("");
//   listEl.insertAdjacentHTML("beforeend", listMarkup);
// }
// renderGallaryList(galleryItems);

// listEl.addEventListener("click", openModal);

// function openModal(event) {
//   event.preventDefault();
//   const currentImg = event.target;
//   if (currentImg.nodeName !== "IMG") {
//     return;
//   }
  //   const urlOrigin = currentImg.dataset.source;
  //   modalImgEl.src = urlOrigin;
  //   modalEl.classList.add("is-open");

  //   buttonEl.addEventListener("click", closeModal);
  //   ligthBoxEl.addEventListener("click", closeModal);
  //   window.addEventListener("keydown", closeModalEsc);
// }

// function closeModal() {
//   modalEl.classList.remove("is-open");
//   modalImgEl.src = "";
//   window.removeEventListener("keydown", closeModalEsc);
// }

// function closeModalEsc(event) {
//   if (event.code !== "Escape") {
//     return;
//   }
//   closeModal();
// }