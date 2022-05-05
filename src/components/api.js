const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: 'd155811e-206c-4e5d-a1d4-99707bccdbdf',
    'Content-Type': 'application/json'
  }
}

// проверка запроса
const checkGet = (ee) => {
    if (ee.ok) {
      return ee.json()
    }
    else {
      return Promise.reject(ee.status)
    }
}

// запрос карточек
export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// запрос о пользователе с сервера
export const getProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// Изменить данные о пользователе
export const changeProfile = (nameProfile, aboutProfile) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameProfile,
      about: aboutProfile
    })
  },
  
  )
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// добавить новую карточку на сервер
export const postAddNewCard = (nameCard, linkCard) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: nameCard,
      link: linkCard
    })
  },

  )
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// удаление карточки
export const deleteCard = (idCard) => {
  return fetch(`${config.baseUrl}/cards/${idCard}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// добавление количства лайков
export const addLike = (idCard) => {
  return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// удаление лайка
export const deleteLike = (idCard) => {
  return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


// редактирования аватарки
export const changeAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    })
  })
  .then ((res) => checkGet(res))

  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
}


