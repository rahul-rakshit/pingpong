import { add5 } from './add5';

describe('add5', () => {
  it('adds 5 to a number', () => {
    const input = 2;

    const result = add5(input);

    expect(result).toEqual(7);
  });
});
