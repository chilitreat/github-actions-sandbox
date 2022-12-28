import { sum } from '../index.mjs'

describe('sum', () => {
  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});