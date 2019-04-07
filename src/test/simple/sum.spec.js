const sum = require('../../simple/sum');

describe('Simple sum function test', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
})
