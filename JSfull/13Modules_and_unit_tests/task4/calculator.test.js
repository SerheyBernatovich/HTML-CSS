import { calc } from './calculator';

it('should get plus', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});
it('should get minus', () => {
  const result = calc('3 - 2');
  expect(result).toEqual('3 - 2 = 1');
});
it('should get multiply', () => {
  const result = calc('1 * 2');
  expect(result).toEqual('1 * 2 = 2');
});
it('should get devid', () => {
  const result = calc('1 / 2');
  expect(result).toEqual('1 / 2 = 0.5');
});
it('get not a string', () => {
  const result = calc(2);
  expect(result).toEqual(null);
});
