
// функция ожидания сохранения
export function loadingSubmit(loading, evt, text = 'Сохранение...') {
  if (loading) {
    evt.target.querySelector('.form__button').textContent = text
  }
  else {
    evt.target.querySelector('.form__button').textContent = text;
  }
}



