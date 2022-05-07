export const popupAddCard = document.querySelector('.popup_type_addCard');  // попап добавления новой карточки
export const allCards = document.querySelector('.cards');
export const templateCards = document.querySelector('#templateCards').content;



// функция ожидания сохранения
export function loadingSubmit(loading, evt, text = 'Сохранение...') {
  if (loading) {
    evt.target.querySelector('.form__button').textContent = text
  }
  else {
    evt.target.querySelector('.form__button').textContent = text;
  }
}


