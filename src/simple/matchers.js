function getMyObject() {
  const data = {one: 1}
  data['two'] = 2
  return data
}

function getFloatingNumber() {
  return 3.7
}

function getString() {
  return 'My number is 4163445000'
}

function getArray() {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ]
  return shoppingList
}

function testForExpection(age) {
  if (age === '' || age < 1) {
    throw new Error('Error: Age must be provided')
  }
  if (age < 16) {
    throw new Error('Error: Age must be greater 16 to apply')
  }
  return 'All good'
}

module.exports = {
  getMyObject: getMyObject,
  getFloatingNumber: getFloatingNumber,
  getString: getString,
  getArray: getArray,
  testForExpection: testForExpection
}
