setup.calcPercentage = (target, integer) => {
  if (Array.isArray(integer)) {
    return integer.reduce(calc, target)
  }
  return calc(target, integer)
}

/**
 * @param {number} target
 * @param {number} integer
 */
function calc (target, integer) {
  return (target / 100) * (100 + integer)
}
