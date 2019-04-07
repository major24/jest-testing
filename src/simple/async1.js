function resolveAfter2Ms(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 1) {
      resolve('Data - Resolved!!');
      } else {
        reject('Reject - ID has to be greater than 1')
      }
    }, 200);
  });
}

async function asyncCall(id) {
  const result = await resolveAfter2Ms(id);
  return result
}

module.exports = {
  asyncCall: asyncCall
}
