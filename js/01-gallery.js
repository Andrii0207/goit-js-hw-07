import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

function onCreateListImages(galleryItems) {
  // return galleryItems
  //   .map(
  //     item =>
  //       `<div class="gallery__item">
  //       <a class="gallery__link" href="${img.original}">
  //         <img class="gallery__image"
  //         src="${img.preview}"
  //         data-source="${img.original}"
  //         alt="${img.description}"/>
  //       </a>
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

galleryEl.innerHTML = onCreateGallery;

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return console.log('Its not a picture');
  }
  const originalSizeImg = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalSizeImg}"/>`);
  instance.show();

  window.addEventListener('keydown', onEscClick);

  function onEscClick(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

// OnShow () => window.addEventListener('keydown', onEscClick)
// OnClose () => window.removeEventListener('keydown', onEscClick)

// window.addEventListener(, onCloseModal);
