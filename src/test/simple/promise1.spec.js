const {
  getPromiseData,
  getCustomerData
 } = require('../../simple/promise1');

describe('When promise1', () => {
  it('And getPromiseData is called', () => {
    return getPromiseData().then(data => {
      expect(data).toBe('Data is here. Promise done!')
    })
  });
})

describe('When getCustomerData is called with id 10', () => {
  it('And passed in 10', () => {
    return getCustomerData(10).then(data => {
      expect(data).toEqual('Customer found. Promise done!')
    })
  })
})

describe('When getCustomerData is called with id -1', () => {
  it('And passed in -1', () => {
    return expect(getCustomerData(-1)).rejects.toMatch('Cutomer NOT found. Promise rejected!')
  })
})
