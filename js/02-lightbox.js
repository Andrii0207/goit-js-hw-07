import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function onCreateListImg(galleryItems) {
  return galleryItems.reduce(
    (acc, item) =>
      acc +
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"/>
        </a>
  </div>`,
    '',
  );
}

const onCreateGallery = onCreateListImg(galleryItems);

galleryEl.innerHTML = onCreateGallery;

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return console.log('Its not a picture');
  }

  const originalSizeImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${originalSizeImg}"/>`);

  instance.show();

  window.addEventListener('keydown', onEscClick);

  function onEscClick(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
