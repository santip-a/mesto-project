
export const validityFormConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  submitButtonDisabledClass: 'form__button_disabled',
  inputErrorClass: 'form__input-error_type_active',
  inputTypeErrorClass: 'form__input_type_error',
}



function showInputError(formElement, element, errorMessage, formConfig) {
  element.classList.add(formConfig.inputTypeErrorClass);
  formElement.querySelector(`.${element.id}-error`).textContent = errorMessage;
  formElement.querySelector(`.${element.id}-error`).classList.add(formConfig.inputErrorClass);
};

function hideInputError(formElement, element, formConfig) {
  element.classList.remove(formConfig.inputTypeErrorClass);
  formElement.querySelector(`.${element.id}-error`).textContent = 'error';
  formElement.querySelector(`.${element.id}-error`).classList.remove(formConfig.inputErrorClass);
};

function isValid(formElement, inputElement, formConfig) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formConfig);
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};

function setEventListeners(formElement, formConfig) {
  const inputList = Array.from(formElement.querySelectorAll(formConfig.inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, formConfig);
      setToogleButton(formElement, formConfig, formElement.checkValidity()) ;
    });
  });
};

export function enableValidation(formConfig) {
  const formList = Array.from(document.querySelectorAll(formConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, formConfig);
  });
};

export function setToogleButton(formElement, formConfig, isActive = false) {
  const button = formElement.querySelector(formConfig.submitButtonSelector);
  if (isActive) {
    button.classList.remove(formConfig.submitButtonDisabledClass);
    button.disabled = false;
  }
  else {
    button.classList.add(formConfig.submitButtonDisabledClass);
    button.disabled = 'disabled';
  }
}
