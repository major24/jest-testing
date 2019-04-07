const { calcTax, getTax } = require('../../mock-fn/with-callback');

// Calling real functions
describe('With-callback.js', () => {
  it('When calcTax is called', () => {
    const list = [20, 30]
    const result = calcTax(list, getTax)
    expect(result).toContain(22)
    expect(result).toContain(33)
  });
})

// Mock functions
// Mock getTax function and pass in our implementation
// This SHOULD NOT call original implementaion
describe('Mock functions ith-callback.js', () => {
  it('When calcTax is called, pass in our getTax implementions', () => {
    const list = [100, 200]
    const mockCallback = jest.fn(amt => amt * .1)
    const result = calcTax(list, mockCallback)
     // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2)
    // The first argument of the first call to the function - 100
    expect(mockCallback.mock.calls[0][0]).toBe(100)
    // The first argument of the second call to the function - 200
    expect(mockCallback.mock.calls[1][0]).toBe(200)
    // The return value of the first call to the function was 10 (tax at 10%)
    expect(mockCallback.mock.results[0].value).toBe(10);
    // The return value of the second call to the function was 20 (tax at 10%)
    expect(mockCallback.mock.results[1].value).toBe(20);
    expect(result).toContain(110)
    expect(result).toContain(220)
  })
})
