export function createButton(texto) {
  const button = document.createElement('button');
  button.textContent = texto;
  document.querySelector('body').append(button);
}
createButton('qqq');
