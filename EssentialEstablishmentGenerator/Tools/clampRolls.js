/**
 * Clamps every value presented to the 1-100 range.
 * Most useful for rolls.
 *
 * @param {Record<number, number>} rolls
 */
setup.clampRolls = function (rolls) {
  Object.keys(rolls).forEach(function (roll) {
    if (rolls[roll] > 100) {
      console.log(rolls[roll] + ' was over 100.')
      rolls[roll] = 100
    } else if (rolls[roll] < 1) {
      console.log(rolls[roll] + ' was under 1.')
      rolls[roll] = 1
    }
  })
  return rolls
}
