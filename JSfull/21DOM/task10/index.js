export function finishForm() {
  const form = document.querySelector('.login-form');

  const inputForm = document.createElement('input');
  inputForm.setAttribute('type', 'text');
  inputForm.setAttribute('name', 'login');
  form.prepend(inputForm);

  document.querySelector('[name = password]').setAttribute('type', 'password');
}

finishForm();
