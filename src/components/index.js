import '../pages/index.css';

import {enableValidation, validityFormConfig} from './validate.js';
import {popupProfile, buttonOpenPopupProfile, buttonClosePopupProfile, formPopupProfile, buttonOpenPopupAddCard,
  buttonClosePopupAddCard, formPopupAddCard, popupAddCard, buttonClosePopupImage, popupImegeOpen,
  openProfile, saveProfile, closePopupOverlayClock, openPopupAddCard} from './modal.js';
import {closePopup,} from './utils.js';
import {saveNewCard} from './card.js'





enableValidation(validityFormConfig);

buttonOpenPopupProfile.addEventListener('click', openProfile); // кнопка открытия popap профиля
buttonClosePopupProfile.addEventListener('click', function() {closePopup(popupProfile)}); // кнопка закрытия popup профиля
formPopupProfile.addEventListener('submit', saveProfile);  // кнопка сохранения popup профиля
// слушатель на закрытие попапа профайла через клик по оверлей
popupProfile.addEventListener('click', evt => {
  closePopupOverlayClock(evt, popupProfile)
});



buttonOpenPopupAddCard.addEventListener('click', openPopupAddCard);  //  кнопка открытие попапа новой карточки
buttonClosePopupAddCard.addEventListener('click', function() {closePopup(popupAddCard)}); // кнопка закрытие попапа новой карточки
formPopupAddCard.addEventListener('submit', saveNewCard); // сохранение новой карточки
// слушатель на закрытие попапа добавления карточки через клик по оверлей
popupAddCard.addEventListener('click', evt => {
  closePopupOverlayClock(evt, popupAddCard)
});



buttonClosePopupImage.addEventListener('click', function() {closePopup(popupImegeOpen)}); // кнопка закрытие попапа картинки
// слушатель на закрытие попапа просмотра картинки через клик по оверлей
popupImegeOpen.addEventListener('click', evt => {
  closePopupOverlayClock(evt, popupImegeOpen)
});








