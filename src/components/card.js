import {formPopupAddCard, popupAddCard, openImegaCard} from './modal.js';
import {closePopup} from './utils.js';

const allCards = document.querySelector('.cards');
const templateCards = document.querySelector('#templateCards').content;

const inputTitlePopupAddCard = formPopupAddCard.elements.title;  // поле ввода названия карточки в попапе
const inputLinkPopupAddCard = formPopupAddCard.elements.link; // поле ввода url карточки в попапе



// Массив карточек
export const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  },
  {
    name: 'Московский зоопарк',
    link: 'https://images.unsplash.com/photo-1563301141-3fb8b3b2df9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667495-f14c98bc2ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHJ1c3NpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];



// Функция создания карточки
function addNewCard (cardText, cardImge) {
  const newCard = templateCards.cloneNode(true)
  newCard.querySelector('.cards__text').textContent = cardText;
  newCard.querySelector('.cards__image').setAttribute('src', cardImge);
  newCard.querySelector('.cards__image').setAttribute('alt', cardText);

  const heart = newCard.querySelector('.cards__heart');
  heart.addEventListener('click', function() {heart.classList.toggle('cards__heart_active')})  // слушатель на "Лайк"

  const cardTrash = newCard.querySelector('.cards__trash');
  cardTrash.addEventListener('click', function() {cardTrash.closest('.cards__item').remove()})  // слушатель на удаление карточки

  const OpenImage = newCard.querySelector('.cards__image');
  OpenImage.addEventListener('click', function() {      // слушатель на открытие картинки
    openImegaCard(cardText, cardImge);
  });
  return newCard;
}

// Функция добавления карточки
export function renderCard (text, url) {
  const card = addNewCard(text, url);
  allCards.prepend(card);
}

// Функция сохранения новой карточки
export function saveNewCard (evt) {
  evt.preventDefault();
  renderCard(inputTitlePopupAddCard.value, inputLinkPopupAddCard.value)
  closePopup(popupAddCard);
}

// вставляем карточки из массива на сайт
initialCards.forEach(function (item) {
  renderCard (item.name, item.link);
});
