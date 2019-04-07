import User from '../../mock-modules/user'

describe('User module.js is created', () => {
  it('When user module is created', () => {
    expect(User).toBeTruthy()
  })
})

// Using real class (user)
describe('User module.js is used', () => {
  it('When getUsername methods is called', () => {
    const user = new User()
    expect(user.getUserInfo()).toBe('UserName: Stefan')
  })
})
