function cleanTransactionsList(arr) {
  const a = arr.map(el => Number(el));
  // console.log(a);
  const b = a.filter(el => !Number.isNaN(el));
  // console.log(b);
  const c = b.map(el => '$' + el.toFixed(2));
  // console.log(c);
  return c;
}

console.log(cleanTransactionsList([' 1.9', '16.4', 17, '1 dollar']));
