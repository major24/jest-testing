const user = jest.genMockFromModule('../user');

user.getUserInfo = () => {
  return 'UserName: MOCK - User Name'
}

export default user;
