import { add4 } from './add4';

describe('add4', () => {
  it('adds 4 to a number', () => {
    const input = 2;

    const result = add4(input);

    expect(result).toEqual(6);
  });
});
