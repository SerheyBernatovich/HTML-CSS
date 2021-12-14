const baseUrl = 'https://61b843c464e4a10017d18e3f.mockapi.io/api/v1/users';
const emailField = document.querySelector('#email');
const userNameField = document.querySelector('#name');
const passwordField = document.querySelector('#password');
const submitButton = document.querySelector('.submit-button');
const formElement = document.querySelector('.login-form');

const isValidForm = () => {
  if (
    emailField.reportValidity() &&
    passwordField.reportValidity() &&
    userNameField.reportValidity()
  ) {
    submitButton.disabled = false;
  }
};

const sendData = formData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });

const submitData = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElement));
  sendData(formData)
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));
      formElement.reset();
      submitButton.disabled = true;
    });
};

formElement.addEventListener('submit', submitData);
formElement.addEventListener('input', isValidForm);
