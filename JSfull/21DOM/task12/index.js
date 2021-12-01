export function squaredNumbers() {
  document.querySelectorAll('.number').forEach(el => {
    el.dataset.squaredNumber = el.dataset.number * el.dataset.number;
  });
}
squaredNumbers();
