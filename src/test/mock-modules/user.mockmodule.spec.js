import user from '../../mock-modules/user'

jest.mock('../../mock-modules/user')

// Using mock user class
describe('User mock module.js', () => {
  beforeEach(() => {

  })
  it('When getUserInfo from Mock module', () => {
    expect(user.getUserInfo()).toBe('UserName: MOCK - User Name')
  })
})
