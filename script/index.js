//  Объекты для попапа профиля
const buttonInfo = document.querySelector('.profile__buttom-info'); // кнопка радактирования профиля

const popupProfile = document.querySelector('.popup_type_profile'); // попап редактирования профиля
const popupButtonClose = popupProfile.querySelector('.popup__button-сlose'); // кнопка закрытия попапа редактирования профиля
const nameInput = popupProfile.querySelector('.form__input');  // поле ввода имени в попап редактирования профиля
const jobInput = popupProfile.querySelector('.form__input_item_last'); // поле ввода работы в попап редактирования профиля

const userName = document.querySelector('.profile__title');  // элемент "Пользователь"
const userJob = document.querySelector('.profile__subtitle');  // элемент "Профессия"

const OpenPopup = function(pop) {pop.classList.add('popup_opened')}; // добавление модификатора открытия popup окна
const ClosePopup = function(pop) {pop.classList.remove('popup_opened')}  // закрытие popup окна



// Функция открытие модального окна профиля
function OpenProfile() {
  OpenPopup(popupProfile);
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

// Сохраниения профиля
function SaveProfile (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  ClosePopup(popupProfile);
}

buttonInfo.addEventListener('click', OpenProfile); // кнопка открытия popap профиля
popupButtonClose.addEventListener('click', function() {ClosePopup(popupProfile)}); // кнопка закрытия popup профиля
popupProfile.addEventListener('submit', SaveProfile);  // кнопка сохранения popup профиля


// Функция добавления карточки
function AddNewCard (cardText, cardImge) {
  const allCards = document.querySelector('.cards')
  const templateCards = document.querySelector('#templateCards').content;
  const newCard = templateCards.querySelector('.cards__item').cloneNode(true);
  newCard.querySelector('.cards__text').textContent = cardText;
  newCard.querySelector('.cards__image').setAttribute('src', cardImge);
  newCard.querySelector('.cards__image').setAttribute('alt', cardText);
  allCards.prepend(newCard);
}

// Объекты для попапа добавления карточки
const buttonAddCard = document.querySelector('.profile__buttom-add');  // кнопка открытия попапа новой карточки
const popupAddCard = document.querySelector('.popup_type_addCard');  // попап добавления новой карточки
const buttonAddCardClose = popupAddCard.querySelector('.popup__button-сlose'); // кнопка закрытия попапа новой карточки
const inputNameAddCard = popupAddCard.querySelector('.form__input');  // поле ввода названия карточки в попапе
const inputUrlAddCard = popupAddCard.querySelector('.form__input_item_last'); // поле ввода url карточки в попапе

// Функция открытия попапа новой карточки
function OpenPopupAddCard () {
  inputNameAddCard.value = '';
  inputUrlAddCard.value = '';
  OpenPopup(popupAddCard);
}

// Функция сохранения новой карточки
function SaveNewCard (evt) {
  evt.preventDefault();
  AddNewCard(inputNameAddCard.value, inputUrlAddCard.value)
  ClosePopup(popupAddCard);
}

popupAddCard.addEventListener('submit', SaveNewCard); // кнопка сохранение новой карточки
buttonAddCard.addEventListener('click', OpenPopupAddCard);  //  кнопка открытие попапа новой карточки
buttonAddCardClose.addEventListener('click', function() {ClosePopup(popupAddCard)}); // кнопка закрытие попапа новой карточки


// Массив карточек
const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  },
  {
    name: 'Московский зоопарк',
    link: 'https://images.unsplash.com/photo-1563301141-3fb8b3b2df9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667495-f14c98bc2ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHJ1c3NpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];

// вставляем карточки из массива на сайт
initialCards.forEach(function (item) {
  AddNewCard (item.name, item.link);
});

const openImegaCard = document.querySelector('.popup_type_openImegeCard');  // oткрытие попапа картинки
const buttonImageClose = openImegaCard.querySelector('.popup__button-сlose'); // кнопка закрытия попапа новой карточки
buttonImageClose.addEventListener('click', function() {ClosePopup(openImegaCard)}); // кнопка закрытие попапа новой карточки


// Клик по карточке (лайк, удаление карточки, открытие картинки в popup)
const clikOnCard = document.querySelector('.elements');
clikOnCard.addEventListener('click', function (evt) {
  const click = evt.target;
  if (click.classList.contains('cards__heart')) {click.classList.toggle('cards__heart_active');}  // если клик по сердцу, то ставим черное сердце и наоборот
  else if (click.classList.contains('cards__trash')) {    // если клик по корзине, то удаляем карточку
    const cardsItem = click.closest('.cards__item');
    cardsItem.remove();
  }
  else if (click.classList.contains('cards__image')) {  // если кликаем по картинки, то открываем её в popup
    const textOpenCard = openImegaCard.querySelector('.popup__title-openImegeCard');
    textCard = click.parentElement;
    textOpenCard.textContent = textCard.querySelector('.cards__text').textContent;
    const srcCard = openImegaCard.querySelector('.popup__img');
    srcCard.setAttribute('src', click.getAttribute('src'));
    srcCard.setAttribute('alt', textCard.querySelector('.cards__text').textContent);
    openImegaCard.classList.add('popup_opened');
  }
});
