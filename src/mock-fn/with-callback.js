function calcTax(items, callback) {
  const result = items.map((amount) => {
    const tax = callback(amount)
    return amount + tax
  })
  return result
}

function getTax(amount) {
  return amount * .1
}

module.exports = {
  calcTax: calcTax,
  getTax: getTax
}
