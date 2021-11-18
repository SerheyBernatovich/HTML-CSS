import getMinSquaredNumber from './getMinSquaredNumber';

it('if array empty-return null', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toBe(null);
});
it('if srtring-return null', () => {
  const result = getMinSquaredNumber('tekst');
  expect(result).toBe(null);
});
it('return square', () => {
  const result = getMinSquaredNumber([-70, 3, 10]);
  expect(result).toEqual(9);
});
