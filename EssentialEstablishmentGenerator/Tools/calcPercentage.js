setup.calcPercentage = function (target, integer) {
  if (Array.isArray(integer)) {
    for (let i = 0; i < integer.length; i++) {
      target = ((target / 100) * (100 + integer[i]))
    }
    return target
  }
  return (target / 100) * (100 + integer)
}
