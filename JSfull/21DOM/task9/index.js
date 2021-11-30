export function finishList() {
  const li = document.createElement('li');
  li.textContent = 1;
  document.querySelector('.list').prepend(li);

  const liFour = document.createElement('li');
  liFour.textContent = 4;
  document.querySelector('.special').before(liFour);

  const liSix = document.createElement('li');
  liSix.textContent = 6;
  document.querySelector('.special').after(liSix);

  const liEight = document.createElement('li');
  liEight.textContent = 8;
  document.querySelector('.list').append(liEight);
}

finishList();
