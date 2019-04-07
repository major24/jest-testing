const {
  asyncCall
 } = require('../../simple/async1');

describe('Async1.js', () => {
  it('When async ascyncCall is called', async () => {
    const data = await asyncCall(10)
    expect(data).toBe('Data - Resolved!!')
    expect.assertions(1)
  });
})

// Use with resolves / rejects
describe('Async1 with resolves', () => {
  it('When async ascyncCall is called and test with resolves', async () => {
    await expect(asyncCall(12)).resolves.toBe('Data - Resolved!!')
  })
})

describe('Async1 with rejects', () => {
  it('When async ascyncCall is called and test with rejects', async () => {
    //await expect(asyncCall(-1)).rejects.toThrow('Reject - ID has to be greater than 1')
    try {
      await asyncCall(-1)
    } catch (e) {
      expect(e).toBe('Reject - ID has to be greater than 1')
    }
  })
})

