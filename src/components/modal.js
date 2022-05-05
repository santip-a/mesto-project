import {openPopup, closePopup} from './utils.js';
import {changeProfile, deleteCard, changeAvatar} from './api.js';
import {setToogleButton, validityFormConfig} from './validate.js';


export const popups = document.querySelectorAll('.popup'); // все попапы

export const popupProfile = document.querySelector('.popup_type_profile'); // попап редактирования профиля
export const buttonOpenPopupProfile = document.querySelector('.profile__buttom-info'); // кнопка радактирования профиля
export const formPopupProfile = document.forms.form_profile; // форма попапа редактирования профиля
const inputNametPopupProfile = formPopupProfile.elements.name;  // поле ввода имени в форме попап редактирования профиля
const inputJobPopupProfile = formPopupProfile.elements.character; // поле ввода работы в форме попап редактирования профиля
const userName = document.querySelector('.profile__title');  // элемент "Пользователь"
const userJob = document.querySelector('.profile__subtitle');  // элемент "Профессия"

export const popupAddCard = document.querySelector('.popup_type_addCard');  // попап добавления новой карточки
export const buttonOpenPopupAddCard = document.querySelector('.profile__buttom-add');  // кнопка открытия попапа новой карточки
export const formPopupAddCard = document.forms.form_addCard; // форма попапа добавления новой карточки

export const popupImegeOpen = document.querySelector('.popup_type_openImegeCard');  // oткрытие попапа картинки
const textPopupImage = popupImegeOpen.querySelector('.popup__title-openImegeCard'); // элемент текста попапа картинки
const urlPopupImage = popupImegeOpen.querySelector('.popup__img'); // элемент url картинки

const popupDelCard = document.querySelector('.popup_type_DelCard'); // попап удаления карточки
const buttonOkPopupDelCard = popupDelCard.querySelector('.form__button')

const popupEditAvatar = document.querySelector('.popup_type_editAvatar'); // попап аватарки

export const buttonOpenPopupEditAvatar = document.querySelector('.profile__edit-avatar'); // кнопка отрития попапа редактора аватарки

export const formPopupAvatar = document.forms.form_editAvatar; // форма попапа редактирования аватарки
const inputLinkAvatar = formPopupAvatar.elements.linkAvatar;  //

export let IdProfile = ''; // id пользователя


// Функция обновления профиля
export const changeContentProfile = (profile) => {
  document.querySelector('.profile__title').textContent = (profile.name);
  document.querySelector('.profile__subtitle').textContent = (profile.about);
  document.querySelector('.profile__avatar').src = (profile.avatar);
  IdProfile = profile._id;
}

// функция ожидания сохранения
export function loadingSubmit(loading, evt, text = 'Сохранение...') {
  if (loading) {
    evt.target.querySelector('.form__button').textContent = text
  }
  else {
    evt.target.querySelector('.form__button').textContent = text;
  }
}

// Функция открытие модального окна профиля
export function openProfile() {
  setToogleButton(popupProfile, validityFormConfig);
  inputNametPopupProfile.value = userName.textContent;
  inputJobPopupProfile.value = userJob.textContent;
  openPopup(popupProfile);
}

// Функция открытие модального окна аватарки
export function openPopupEditAvatar() {
  formPopupAvatar.reset();
  setToogleButton(popupEditAvatar, validityFormConfig);
  openPopup(popupEditAvatar);
}



// Сохраниения профиля  и закрытия модального окна
export function saveProfile (evt) {
  let text = evt.target.querySelector('.form__button').textContent;
  loadingSubmit(true, evt);
  evt.preventDefault();
  changeProfile(inputNametPopupProfile.value, inputJobPopupProfile.value)
    .then ((data) => {
      changeContentProfile(data);
      closePopup(popupProfile);
    })
  .finally(() => {loadingSubmit(false, evt, text)})
}


// Сохраниения аватарки  и закрытия модального окна
export function saveAvatar (evt) {
  evt.preventDefault();
  let text = evt.target.querySelector('.form__button').textContent;
  loadingSubmit(true, evt);
  changeAvatar(inputLinkAvatar.value)
    .then ((data) => {
      document.querySelector('.profile__avatar').src = (data.avatar);
      closePopup(popupEditAvatar);
    })
    .finally(() => {loadingSubmit(false, evt, text)})

}


// Функция открытия попапа новой карточки
export function openPopupAddCard () {
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
      elem.remove();
    })
  })
}

