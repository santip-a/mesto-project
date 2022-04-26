
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') // нашли открытый попап
    closePopup(openedPopup);  //<== закрыли попап с помощью функции `closePopup` ==
  }
}

// добавление модификатора открытия popup окна
export const openPopup = function(pop) {
  pop.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

// закрытие popup окна
export const closePopup = function(pop) {
  pop.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}





