import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

function onCreateListImages(galleryItems) {
  // return galleryItems
  //   .map(
  //     item => `<div class="gallery__item">
  //     <a class="gallery__link" href = "${item.original}">
  //     <img class="gallery__image" src="${item.preview}"
  //     data-source="${item.original}"
  //     alt="${item.description}"/>
  //     </a>
  //     </div>`,
  //   )
  //   .join('');
  return galleryItems.reduce(
    (acc, img) =>
      acc +
      `<div class="gallery__item">
        <a class="gallery__link" href="${img.original}">
          <img class="gallery__image"
          src="${img.preview}" 
          data-source="${img.original}" 
          alt="${img.description}"/>
        </a>
      </div>`,
    '',
  );
}

const onCreateGallery = onCreateListImages(galleryItems);
// console.log(onCreateGallery);

galleryEl.innerHTML = onCreateGallery;

galleryEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return console.log('Its not a picture');
  }
  const originalSizeImg = event.target.dataset.source;
  basicLightbox.create(`<img src="${originalSizeImg}">`).show();
}
