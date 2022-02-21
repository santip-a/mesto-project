const popupProfile = document.querySelector('.popup_type_profile'); // попап редактирования профиля
const buttonOpenPopupProfile = document.querySelector('.profile__buttom-info'); // кнопка радактирования профиля
const buttonClosePopupProfile = popupProfile.querySelector('.popup__button-сlose'); // кнопка закрытия попапа редактирования профиля

const nameInputPopupProfile = popupProfile.querySelector('.form__input');  // поле ввода имени в попап редактирования профиля
const jobInputPopupProfile = popupProfile.querySelector('.form__input_item_last'); // поле ввода работы в попап редактирования профиля

const userName = document.querySelector('.profile__title');  // элемент "Пользователь"
const userJob = document.querySelector('.profile__subtitle');  // элемент "Профессия"

const openPopup = function(pop) {pop.classList.add('popup_opened')}; // добавление модификатора открытия popup окна
const closePopup = function(pop) {pop.classList.remove('popup_opened')}  // закрытие popup окна

// Объекты для попапа добавления карточки
const popupAddCard = document.querySelector('.popup_type_addCard');  // попап добавления новой карточки
const buttonOpenPopupAddCard = document.querySelector('.profile__buttom-add');  // кнопка открытия попапа новой карточки
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__button-сlose'); // кнопка закрытия попапа новой карточки
const formPopupAddCard = popupAddCard.querySelector('.form');
const inputNamePopupAddCard = popupAddCard.querySelector('.form__input');  // поле ввода названия карточки в попапе
const inputUrlPopupAddCard = popupAddCard.querySelector('.form__input_item_last'); // поле ввода url карточки в попапе

const popupImegeOpen = document.querySelector('.popup_type_openImegeCard');  // oткрытие попапа картинки
const buttonClosePopupImage = popupImegeOpen.querySelector('.popup__button-сlose'); // кнопка закрытия попапа новой карточки
const textPopupImage = popupImegeOpen.querySelector('.popup__title-openImegeCard'); // элемент текста попапа картинки
const urlPopupImage = popupImegeOpen.querySelector('.popup__img'); // элемент url картинки

const allCards = document.querySelector('.cards')

const templateCards = document.querySelector('#templateCards').content;


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

// Функция открытие модального окна профиля
function openProfile() {
  openPopup(popupProfile);
  nameInputPopupProfile.value = userName.textContent;
  jobInputPopupProfile.value = userJob.textContent;
}

// Сохраниения профиля
function saveProfile (evt) {
  evt.preventDefault();
  userName.textContent = nameInputPopupProfile.value;
  userJob.textContent = jobInputPopupProfile.value;
  closePopup(popupProfile);
}

// функция открытия картинки
function openImegaCard (textImage, urlImage) {
  openPopup(popupImegeOpen);
  urlPopupImage.setAttribute('src', urlImage);
  urlPopupImage.setAttribute('alt', textImage);
  textPopupImage.textContent = textImage;
}



// Функция создания карточки
function addNewCard (cardText, cardImge) {
  const newCard = templateCards.cloneNode(true)
  newCard.querySelector('.cards__text').textContent = cardText;
  newCard.querySelector('.cards__image').setAttribute('src', cardImge);
  newCard.querySelector('.cards__image').setAttribute('alt', cardText);

  const heart = newCard.querySelector('.cards__heart');
  heart.addEventListener('click', function() {heart.classList.toggle('cards__heart_active')})  // слушатель на "Лайк"

  const cardTrash = newCard.querySelector('.cards__trash');
  cardTrash.addEventListener('click', function() {cardTrash.closest('.cards__item').remove()})  // слушатель на удаление карточки

  const OpenImage = newCard.querySelector('.cards__image');
  OpenImage.addEventListener('click', function() {      // слушатель на открытие картинки
    openImegaCard(cardText, cardImge);
  });
  // allCards.prepend(newCard);
  return newCard;
}

// Функция добавления карточки
function renderCard (text, url) {
  const card = addNewCard(text, url);
  allCards.prepend(card);
}

// Функция открытия попапа новой карточки
function openPopupAddCard () {
  formPopupAddCard.reset();
  openPopup(popupAddCard);
}

// Функция сохранения новой карточки
function saveNewCard (evt) {
  evt.preventDefault();
  renderCard(inputNamePopupAddCard.value, inputUrlPopupAddCard.value)
  closePopup(popupAddCard);
}

buttonOpenPopupProfile.addEventListener('click', openProfile); // кнопка открытия popap профиля
buttonClosePopupProfile.addEventListener('click', function() {closePopup(popupProfile)}); // кнопка закрытия popup профиля
popupProfile.addEventListener('submit', saveProfile);  // кнопка сохранения popup профиля

buttonOpenPopupAddCard.addEventListener('click', openPopupAddCard);  //  кнопка открытие попапа новой карточки
buttonClosePopupAddCard.addEventListener('click', function() {closePopup(popupAddCard)}); // кнопка закрытие попапа новой карточки
popupAddCard.addEventListener('submit', saveNewCard); // сохранение новой карточки

buttonClosePopupImage.addEventListener('click', function() {closePopup(popupImegeOpen)}); // кнопка закрытие попапа картинки

// вставляем карточки из массива на сайт
initialCards.forEach(function (item) {
  renderCard (item.name, item.link);
});


