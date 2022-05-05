import {formPopupAddCard, popupAddCard, openImegaCard, IdProfile, openPopupDelCard, loadingSubmit} from './modal.js';
import {closePopup} from './utils.js';
import {getCards, postAddNewCard, addLike, deleteLike} from './api.js';

const allCards = document.querySelector('.cards');
const templateCards = document.querySelector('#templateCards').content;

const inputTitlePopupAddCard = formPopupAddCard.elements.title;  // поле ввода названия карточки в попапе
const inputLinkPopupAddCard = formPopupAddCard.elements.link; // поле ввода url карточки в попапе



// Функция создания карточки
function addNewCard (elementCard) {
  const newCard = templateCards.cloneNode(true)
  newCard.querySelector('.cards__text').textContent = elementCard.name;
  newCard.querySelector('.cards__image').setAttribute('src', elementCard.link);
  newCard.querySelector('.cards__image').setAttribute('alt', elementCard.name);
  newCard.querySelector('.cards__like').textContent = elementCard.likes.length;


  const heart = newCard.querySelector('.cards__heart');
  const likes =  newCard.querySelector('.cards__like')

  elementCard.likes.forEach((elem) => {
    if (elem._id == IdProfile) {
      heart.classList.add('cards__heart_active')
    }
  })

  // heart.addEventListener('click', function() {heart.classList.toggle('cards__heart_active')})  // слушатель на "Лайк"
  heart.addEventListener('click', function() {
    if (heart.classList.contains('cards__heart_active')) {
      deleteLike(elementCard._id)
      .then ((card) => {
        likes.textContent = card.likes.length;
        heart.classList.remove('cards__heart_active')
      })
    }
    else {
      addLike(elementCard._id)
      .then ((card) => {
        likes.textContent = card.likes.length
        heart.classList.add('cards__heart_active')
      })
    }
  })



  const OpenImage = newCard.querySelector('.cards__image');
  OpenImage.addEventListener('click', function() {      // слушатель на открытие картинки
    openImegaCard(elementCard.name, elementCard.link);
  });

  if (elementCard.owner._id === IdProfile) {
    const cardTrash = newCard.querySelector('.cards__trash');
    cardTrash.addEventListener('click', function() {openPopupDelCard(cardTrash.closest('.cards__item'), elementCard._id)})  // слушатель на удаление карточки
    cardTrash.classList.remove('cards__trash_hidden');
  }

  return newCard;
}

// Функция добавления карточки
export function renderCard (elementCard) {
  const card = addNewCard(elementCard);
  allCards.append(card);
}

// Функция сохранения новой карточки
export function saveNewCard (evt) {
  let text = evt.target.querySelector('.form__button').textContent;
  loadingSubmit(true, evt);
  evt.preventDefault();
  postAddNewCard(inputTitlePopupAddCard.value, inputLinkPopupAddCard.value)
    .then ((data) => {
      renderCard(data);
      closePopup(popupAddCard);
      })
    .finally(() => {loadingSubmit(false, evt, text)})
}


// вставляем карточки из сервера
getCards()
.then ((data) => {
  data.forEach(function (item) {
    renderCard (item)
  });
})
