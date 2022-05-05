import '../pages/index.css';

import {enableValidation, validityFormConfig, setToogleButton} from './validate.js';
import {loadingSubmit} from  './utils.js';
import {openPopup, closePopup,} from './modal.js';
import {popupAddCard, delCard, renderCard, deleteLikeCard, putLikeCard} from './card.js';
import {getProfile, changeProfile, deleteCard, changeAvatar, postAddNewCard, getCards, requestAddLike, requestDeleteLike} from './api.js';


export let idProfile = '';


const buttonOpenPopupAddCard = document.querySelector('.profile__buttom-add');  // кнопка открытия попапа новой карточки


const popups = document.querySelectorAll('.popup'); // все попапы

const userName = document.querySelector('.profile__title');  // элемент "Пользователь"
const userJob = document.querySelector('.profile__subtitle');  // элемент "Профессия"
const userAvatar = document.querySelector('.profile__avatar');  // элемент "Аватар"

const popupProfile = document.querySelector('.popup_type_profile'); // попап редактирования профиля
const buttonOpenPopupProfile = document.querySelector('.profile__buttom-info'); // кнопка радактирования профиля
const formPopupProfile = document.forms.form_profile; // форма попапа редактирования профиля
const inputNametPopupProfile = formPopupProfile.elements.name;  // поле ввода имени в форме попап редактирования профиля
const inputJobPopupProfile = formPopupProfile.elements.character; // поле ввода работы в форме попап редактирования профиля

const formPopupAvatar = document.forms.form_editAvatar; // форма попапа редактирования аватарки
const inputLinkAvatar = formPopupAvatar.elements.linkAvatar;  //

const popupDelCard = document.querySelector('.popup_type_DelCard'); // попап удаления карточки
const buttonOkPopupDelCard = popupDelCard.querySelector('.form__button') // кнопка удаления карточки в попапе

const popupImegeOpen = document.querySelector('.popup_type_openImegeCard');  // oткрытие попапа картинки
const textPopupImage = popupImegeOpen.querySelector('.popup__title-openImegeCard'); // элемент текста попапа картинки
const urlPopupImage = popupImegeOpen.querySelector('.popup__img'); // элемент url картинки

const formPopupAddCard = document.forms.form_addCard; // форма попапа добавления новой карточки

const inputTitlePopupAddCard = formPopupAddCard.elements.title;  // поле ввода названия карточки в попапе
const inputLinkPopupAddCard = formPopupAddCard.elements.link; // поле ввода url карточки в попапе

const popupEditAvatar = document.querySelector('.popup_type_editAvatar'); // попап аватарки

const buttonOpenPopupEditAvatar = document.querySelector('.profile__edit-avatar'); // кнопка отрития попапа редактора аватарки



// ==========================

// Функция обновления профиля
const changeContentProfile = (profile) => {
  userName.textContent = (profile.name);
  userJob.textContent = (profile.about);
  userAvatar.src = (profile.avatar);
  idProfile = profile._id;
}

// Функция открытие модального окна профиля
function openProfile() {
  setToogleButton(popupProfile, validityFormConfig);
  inputNametPopupProfile.value = userName.textContent;
  inputJobPopupProfile.value = userJob.textContent;
  openPopup(popupProfile);
}

// Функция открытие модального окна аватарки
function openPopupEditAvatar() {
  formPopupAvatar.reset();
  setToogleButton(popupEditAvatar, validityFormConfig);
  openPopup(popupEditAvatar);
}


// Сохраниения профиля  и закрытия модального окна
function saveProfile (evt) {
  const text = evt.target.querySelector('.form__button').textContent;
  loadingSubmit(true, evt);
  evt.preventDefault();
  changeProfile(inputNametPopupProfile.value, inputJobPopupProfile.value)
    .then ((data) => {
      changeContentProfile(data);
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {loadingSubmit(false, evt, text)})
}


// Сохраниения аватарки  и закрытия модального окна
function saveAvatar (evt) {
  evt.preventDefault();
  const text = evt.target.querySelector('.form__button').textContent;
  loadingSubmit(true, evt);
  changeAvatar(inputLinkAvatar.value)
    .then ((data) => {
      document.querySelector('.profile__avatar').src = (data.avatar);
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {loadingSubmit(false, evt, text)})
}


// Функция открытия попапа новой карточки
function openPopupAddCard () {
  formPopupAddCard.reset();
  setToogleButton(popupAddCard, validityFormConfig);
  openPopup(popupAddCard);
}


// функция открытия картинки
export function openImegaCard (textImage, urlImage) {
  openPopup(popupImegeOpen);
  urlPopupImage.setAttribute('src', urlImage);
  urlPopupImage.setAttribute('alt', textImage);
  textPopupImage.textContent = textImage;
}


export function openPopupDelCard(elem, idCardDel) {
  openPopup(popupDelCard);
  buttonOkPopupDelCard.addEventListener('click', function() {
    deleteCard(idCardDel)
      .then (() => {
      closePopup(popupDelCard);
      delCard(elem);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    })
}


// Функция сохранения новой карточки
function saveNewCard (evt) {
  const text = evt.target.querySelector('.form__button').textContent;
  loadingSubmit(true, evt);
  evt.preventDefault();
  postAddNewCard(inputTitlePopupAddCard.value, inputLinkPopupAddCard.value)
    .then ((data) => {
      renderCard(data);
      closePopup(popupAddCard);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {loadingSubmit(false, evt, text)})
}


export const requestDelLikeCard = (cardId, heart, likes) => {
  requestDeleteLike(cardId)
  .then ((card) => {
    deleteLikeCard(card, likes, heart)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}

export const requestAddLikeCard = (cardId, heart, likes) => {
  requestAddLike(cardId)
    .then ((card) => {
      putLikeCard(card, likes, heart)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
}


Promise.all([getProfile(), getCards()])
  .then(([profile, data]) => {
    changeContentProfile(profile);
    data.forEach(function (item) {
      renderCard(item)
    });
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })




enableValidation(validityFormConfig);

buttonOpenPopupProfile.addEventListener('click', openProfile); // кнопка открытия popap профиля
formPopupProfile.addEventListener('submit', saveProfile);  // кнопка сохранения popup профиля


buttonOpenPopupAddCard.addEventListener('click', openPopupAddCard);  //  кнопка открытие попапа новой карточки
formPopupAddCard.addEventListener('submit', saveNewCard); // сохранение новой карточки

buttonOpenPopupEditAvatar.addEventListener('click', openPopupEditAvatar)
formPopupAvatar.addEventListener('submit', saveAvatar)

// закрытие попапа по оверлею или крестику
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__button-сlose')) {
        closePopup(popup)
      }
  })
})




