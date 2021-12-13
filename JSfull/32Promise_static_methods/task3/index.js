/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = num =>
  new Promise((resolve, reject) => {
    resolve(num);
  });

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
