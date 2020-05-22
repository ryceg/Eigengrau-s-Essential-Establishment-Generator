/**
 * @param specs Object containing elements as properties and their weight as value
 */
setup.weightRandom = function (specs) {
  let sum = 0
  const r = randomFloat(0, 1)
  let totalWeight = 0

  if (specs === null || typeof specs !== 'object') {
    return null
  }

  for (const prop in specs) {
    totalWeight += specs[prop]
  }

  for (const prop in specs) {
    sum += specs[prop] / totalWeight
    if (r <= sum) return prop
  }
}
