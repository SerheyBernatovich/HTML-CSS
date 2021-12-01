export function getSection(num) {
  const el = document.querySelector(`span[data-number='${num}']`);
  return el.closest('.box').getAttribute('data-section');
}
// getSection(6);
