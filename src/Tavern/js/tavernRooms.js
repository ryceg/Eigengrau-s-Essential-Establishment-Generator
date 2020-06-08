setup.tavernRooms = tavern => {
  return getBySize(tavern.roll.size) + populationModifier(tavern.roll.population)
}

/**
 * @param {number} sizeRoll
 * @returns {number}
 */
function getBySize (sizeRoll) {
  if (sizeRoll > 80) return random(6, 10)
  if (sizeRoll > 60) return random(5, 9)
  if (sizeRoll > 40) return random(4, 8)
  if (sizeRoll > 20) return random(3, 6)
  return random(2, 4)
}

/**
 * @param {number} populationRoll
 * @returns {number}
 */
function populationModifier (populationRoll) {
  if (populationRoll > 80) return -3
  if (populationRoll > 60) return -2
  if (populationRoll > 40) return -1
  if (populationRoll > 20) return 2
  return 3
}
