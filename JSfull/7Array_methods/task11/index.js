function filterNames(arr, text) {
  return arr.filter((name) => name.includes(text) && name.length > 5);
}

console.log(filterNames(['Oooooo', 'qqqq'], 'oo'));
console.log(
  filterNames(
    ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya', 'Sanya'],
    'ya'
  )
);
