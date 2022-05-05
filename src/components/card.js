import {openImegaCard, openPopupDelCard, idProfile, requestAddLikeCard, requestDelLikeCard} from './index.js'


export const popupAddCard = document.querySelector('.popup_type_addCard');  // попап добавления новой карточки


const allCards = document.querySelector('.cards');
const templateCards = document.querySelector('#templateCards').content;




// функция удаления карточки
export function delCard(card) {
  card.remove();
  card = null;
}

// удаление лайка
export function deleteLikeCard(card, likes, heart) {
  likes.textContent = card.likes.length;
  heart.classList.remove('cards__heart_active')
}

// установка лайка
export function putLikeCard(card, likes, heart) {
  likes.textContent = card.likes.length
  heart.classList.add('cards__heart_active')
}


// Функция создания карточки
function createCard (elementCard, addLikeCard, delLikeCard) {
  const newCard = templateCards.cloneNode(true);
  const imageNewCard = newCard.querySelector('.cards__image'); // элемент картинки в создоваемой карточке
  newCard.querySelector('.cards__text').textContent = elementCard.name;
  imageNewCard.setAttribute('src', elementCard.link);
  imageNewCard.setAttribute('alt', elementCard.name);
  newCard.querySelector('.cards__like').textContent = elementCard.likes.length;


  const heart = newCard.querySelector('.cards__heart');
  const likes =  newCard.querySelector('.cards__like')

  elementCard.likes.forEach((elem) => {
    if (elem._id == idProfile) {
      heart.classList.add('cards__heart_active')
    }
  })

  // слушатель на "Лайк"
  heart.addEventListener('click', function() {
    if (heart.classList.contains('cards__heart_active')) {
      delLikeCard(elementCard._id, heart, likes)
    }
    else {
      addLikeCard(elementCard._id, heart, likes)
    }
  })

  const openPopupImage = newCard.querySelector('.cards__image');
  openPopupImage.addEventListener('click', function() {      // слушатель на открытие картинки
    openImegaCard(elementCard.name, elementCard.link);
  });

  if (elementCard.owner._id === idProfile) {
    const cardTrash = newCard.querySelector('.cards__trash');
    cardTrash.addEventListener('click', function() {openPopupDelCard(cardTrash.closest('.cards__item'), elementCard._id)})  // слушатель на удаление карточки
    cardTrash.classList.remove('cards__trash_hidden');
  }
  return newCard;
}

// добавление карточек
export function renderCard (elementCard) {
  const card = createCard(elementCard, requestAddLikeCard, requestDelLikeCard);
  allCards.prepend(card);
}
