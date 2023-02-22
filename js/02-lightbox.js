import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryNodes = [];

const createItem = ({ original, description, preview }) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.dataset.source = original;
  galleryImage.alt = description;

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);

  galleryNodes.push(galleryItem);
};

const openImage = (event) => {
  event.preventDefault();

  const originalImgUrl = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img width="auto" height="auto" src="${originalImgUrl}">`,
    {
      onShow: () => window.addEventListener("keydown", onCloseWithEscape),
      onClose: () => window.removeEventListener("keydown", onCloseWithEscape),
    }
  );

  const onCloseWithEscape = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
};

galleryItems.forEach((item) => createItem(item));
galleryEl.append(...galleryNodes);

galleryEl.addEventListener("click", openImage);
