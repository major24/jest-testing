function getPromiseData() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('Data is here. Promise done!')
    }, 200)
  })
}

function getCustomerData(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (id > 1) {
      resolve('Customer found. Promise done!')
      } else {
        reject('Cutomer NOT found. Promise rejected!')
      }
    }, 200)
  })
}

module.exports = {
  getPromiseData: getPromiseData,
  getCustomerData: getCustomerData
}
