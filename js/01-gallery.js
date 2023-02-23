import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryNodes = []; // Масив для зберігання окремих вузлів "div"

/**
 * Функція створює розмітку елементів галереї
 * @param {{ original, description, preview }} Деструктуризація об'єкту параметрів galleryItems
 * @returns {void}
 */
const createItem = ({ original, description, preview }) => {
  const galleryItem = document.createElement("div");         // Створення окремого елемента "div"
  galleryItem.classList.add("gallery__item");                // Додавання класу до створеного "div"

  const galleryLink = document.createElement("a");           // Створення окремого елемента "a"
  galleryLink.classList.add("gallery__link");                // Додавання класу до створеного "a"
  galleryLink.href = original;                               // Вказує посилання на оригінальне зображення в "href"

  const galleryImage = document.createElement("img");        // Створення окремого елемента "img"
  galleryImage.classList.add("gallery__image");              // Додавання класу до створеного "img"
  galleryImage.src = preview;                                // Вказує посилання на зображення для preview в "src"
  galleryImage.dataset.source = original;                    // Вказує посилання на оригінальне зображення в "data-атрибуті"
  galleryImage.alt = description;                            // Вказує текст для атрибуту "alt"

  galleryLink.append(galleryImage);                          // Додає елемент "img" в елемент "a"
  galleryItem.append(galleryLink);                           // Додає елемент "a" в елемент "div"

  galleryNodes.push(galleryItem);                            // Додає готовий елемент "div" в масив
};

/**
 * Функція відкриває модальне вікно і показує оригінальне зображення
 * @param {event} Об'єкт події "click"
 * @returns {void}
 */
const openImage = (event) => {
  event.preventDefault();                                                   // Скасовує поведінку за замовчуванням

  if (event.target.nodeName !== "IMG") return;                              // Припиняє виконання функції якщо клік був не на елементі <img>

  const originalImgUrl = event.target.dataset.source;                       // Отримує посилання на оригінальне зображення з "data-атрибуту"

  // Створення об'єкту для рендерингу модального вікна за допомогою бібліотеки basicLightbox
  const instance = basicLightbox.create(`<img src="${originalImgUrl}">`, {
    onShow: () => window.addEventListener("keydown", onCloseByEsc),         // Реєструє обробник події "keydown" якщо показано модальне вікно
    onClose: () => window.removeEventListener("keydown", onCloseByEsc),     // Видаляє відповідний обробник події "keydown" при видаленні модального вікна
  });
  

  /**
   * Фунція перевіряє чи була натиснута клавіша "Esc". Якщо так, то викликає функцію для видалення модального вікна
   * @param {event} Об'єкт події "keydown"
   * @returns {void}
   */
  const onCloseByEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();                                                     // Викликає функцію для видалення модального вікна
    }
  };

  instance.show();                                                          // Рендерить модальне вікно з оригінальним зображенням
};

galleryItems.forEach((item) => createItem(item)); // Перебір даних з об'єкту galleryItems і створення елементу галереї

//////////////////////////////////// Фікс посилання на перше зображення галереї ///////////////////////////////////////////////
galleryNodes[0].firstChild.href = "https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg";
galleryNodes[0].firstChild.firstChild.dataset.source ="https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg";
galleryNodes[0].firstChild.firstChild.src = "https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825__340.jpg";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

galleryEl.append(...galleryNodes); // Додає готові вузли розмітки в контейнер галереї

galleryEl.addEventListener("click", openImage);