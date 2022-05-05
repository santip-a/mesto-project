import '../pages/index.css';

import {enableValidation, validityFormConfig} from './validate.js';
import {popups, buttonOpenPopupProfile, formPopupProfile, buttonOpenPopupAddCard, formPopupAddCard,
    openProfile, saveProfile, openPopupAddCard, changeContentProfile, buttonOpenPopupEditAvatar,
    openPopupEditAvatar, formPopupAvatar, saveAvatar} from './modal.js';
import {closePopup,} from './utils.js';
import {saveNewCard} from './card.js';

import {getProfile} from './api.js';

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

// получаем данные профайла
getProfile()
.then ((data) => {
  changeContentProfile(data);
})








