import {openPopup, closePopup} from './utils.js';

export const popups = document.querySelectorAll('.popup'); // все попапы

export const popupProfile = document.querySelector('.popup_type_profile'); // попап редактирования профиля
export const buttonOpenPopupProfile = document.querySelector('.profile__buttom-info'); // кнопка радактирования профиля
export const formPopupProfile = document.forms.form_profile; // форма попапа редактирования профиля
const inpuNametPopupProfile = formPopupProfile.elements.name;  // поле ввода имени в форме попап редактирования профиля
const inputJobPopupProfile = formPopupProfile.elements.character; // поле ввода работы в форме попап редактирования профиля
const userName = document.querySelector('.profile__title');  // элемент "Пользователь"
const userJob = document.querySelector('.profile__subtitle');  // элемент "Профессия"

export const popupAddCard = document.querySelector('.popup_type_addCard');  // попап добавления новой карточки
export const buttonOpenPopupAddCard = document.querySelector('.profile__buttom-add');  // кнопка открытия попапа новой карточки
export const formPopupAddCard = document.forms.form_addCard; // форма попапа добавления новой карточки

export const popupImegeOpen = document.querySelector('.popup_type_openImegeCard');  // oткрытие попапа картинки
const textPopupImage = popupImegeOpen.querySelector('.popup__title-openImegeCard'); // элемент текста попапа картинки
const urlPopupImage = popupImegeOpen.querySelector('.popup__img'); // элемент url картинки





// Функция открытие модального окна профиля
export function openProfile() {
  inpuNametPopupProfile.value = userName.textContent;
  inputJobPopupProfile.value = userJob.textContent;
  openPopup(popupProfile);
}

// Сохраниения профиля  и закрытия модального окна
export function saveProfile (evt) {
  evt.preventDefault();
  userName.textContent = inpuNametPopupProfile.value;
  userJob.textContent = inputJobPopupProfile.value;
  closePopup(popupProfile);
}


// Функция открытия попапа новой карточки
export function openPopupAddCard () {
  formPopupAddCard.reset();
  openPopup(popupAddCard);
}


// функция открытия картинки
export function openImegaCard (textImage, urlImage) {
  openPopup(popupImegeOpen);
  urlPopupImage.setAttribute('src', urlImage);
  urlPopupImage.setAttribute('alt', textImage);
  textPopupImage.textContent = textImage;
}


