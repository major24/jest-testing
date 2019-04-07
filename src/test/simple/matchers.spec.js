const {
  getMyObject,
  getFloatingNumber,
  getString,
  getArray,
  testForExpection
 } = require('../../simple/matchers');

describe('Object assignment', () => {
  it('validate object equality', () => {
    expect(getMyObject()).toEqual({one: 1, two: 2});
  });
})

describe('Floating point assignment', () => {
  it('validate number equality', () => {
    expect(getFloatingNumber()).toEqual(3.7);
    expect(getFloatingNumber()).not.toBe(5);
    expect(getFloatingNumber()).toBeGreaterThan(3);
  });
})

describe('String validation', () => {
  it('validate number', () => {
    expect(getString()).toContain('My number');
    expect(getString()).toMatch(/\d{10}/);
  });
})

describe('Array validation', () => {
  it('validate array to contain trash bags', () => {
    expect(getArray()).toContain('trash bags');
    expect(getArray()).toContain('beer');
  });
})

describe('Exception validation', () => {
  it('validate for errors', () => {
    function _ageEmpty() {
      testForExpection('')
    }
    expect(_ageEmpty).toThrowError('Error: Age must be provided')

    function _ageLessThan() {
      testForExpection(5)
    }
    expect(_ageLessThan).toThrowError('Error: Age must be greater 16 to apply')

    expect(testForExpection(30)).toEqual('All good')
  });
})
