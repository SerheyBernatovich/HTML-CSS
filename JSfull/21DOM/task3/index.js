function getItemsList() {
  const result = document.querySelectorAll('.technology');
  console.dir(result);
  return result;
}
function getItemsArray() {
  const result = Array.from(document.querySelectorAll('.tool'));
  console.dir(result);
  return result;
}
getItemsList();
getItemsArray();
