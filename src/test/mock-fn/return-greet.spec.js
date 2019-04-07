const greet = require('../../mock-fn/return-greet');

// Calling real functions
describe('Return-greet.js', () => {
  it('When return-greet is called', () => {
    expect(greet('Major')).toContain('Hello Major, Welcome to the class')
  });
})

// MOCK functions
// This SHOULD NOT call original implementaion
describe('Mock functions return-greet.js', () => {
  it('When called with mock implementations', () => {
    const mymockfn = jest.fn()
    mymockfn.mockReturnValueOnce('Hello Stefan')
    mymockfn.mockReturnValueOnce('Hello Rodney')
    expect(mymockfn()).toEqual('Hello Stefan')
    expect(mymockfn()).toEqual('Hello Rodney')
  })
})
