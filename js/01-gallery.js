import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function onCreateListImages(item) {
  return galleryItems
    .map(
      item => `<div class="gallery__item">
      <a class="gallery__link" href = "${item.original}">
      <img class="gallery__image" src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"/>
      </a>
      </div>`,
    )
    .join('');
  console.log(galleryItems);
}

const onCreateGallery = onCreateListImages(galleryItems);
console.log(onCreateGallery);
