import { galleryItems } from "./gallery-items.js";

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

galleryItems.forEach((item) => createItem(item));
galleryEl.append(...galleryNodes);

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const galleryEl = document.querySelector(".gallery");
// const galleryNodes = [];

// // const createItem = (...item) => {
// //   console.log(item);
// // //   const galleryItem = document.createElement("div");
// // //   galleryItem.classList.add("gallery__item");

// // //   const galleryLink = document.createElement("a");
// // //   galleryLink.classList.add("gallery__link");
// // //   galleryLink.href = original;

// // //   const galleryImage = document.createElement("img");
// // //   galleryImage.classList.add("gallery__image");
// // //   galleryImage.src = preview;
// // //   galleryImage.dataset.source = original;
// // //   galleryImage.alt = description;

// // //   galleryLink.append(galleryImage);
// // //   galleryItem.append(galleryLink);

// // //   galleryNodes.push(galleryItem);
// // };

// function createItem({ original, description, preview }) {
//   const galleryItem = document.createElement("div");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = original;

//   const galleryImage = document.createElement("img");
//   galleryImage.classList.add("gallery__image");
//   galleryImage.src = preview;
//   galleryImage.dataset.source = original;
//   galleryImage.alt = description;

//   galleryLink.append(galleryImage);
//   galleryItem.append(galleryLink);

//   galleryNodes.push(galleryItem);
// }

// function openImage(event) {
//     event.preventDefault();
// }

// galleryItems.forEach((item) => createItem(item));
// galleryEl.append(...galleryNodes);

// galleryEl.addEventListener("click", openImage);

// //console.log(galleryItems);
// //console.log(galleryEl);
// //console.log(galleryEl);
// //{ original, description, preview }
