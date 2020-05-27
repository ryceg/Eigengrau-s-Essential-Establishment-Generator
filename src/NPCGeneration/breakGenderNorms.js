/**
 * town.roll.equality, change of breaking gender norm
 * @type {[number, number, string][]}
 */
const genderEqualityLikelihood = [
  [139, 10, 'woman'],
  [99, 10, 'woman'],
  [90, 15, 'woman'],
  [80, 20, 'woman'],
  [70, 30, 'woman'],
  [60, 40, 'woman'],
  [55, 60, 'woman'],
  [50, 100, 'man'],
  [45, 60, 'man'],
  [40, 50, 'man'],
  [30, 40, 'man'],
  [20, 30, 'man'],
  [10, 20, 'man'],
  [5, 15, 'man'],
  [-101, 10, 'man']
]

setup.breakGenderNorms = (town, npc) => {
  Math.clamp(town.roll.equality, 0, 100)

  if (settings.ignoreGender) {
    return true
  }

  const temp = genderEqualityLikelihood.find(([threshold]) => {
    return threshold <= town.roll.equality
  })

  const percentage = temp ? temp[1] : 50

  return random(1, 100) < percentage
}

setup.isDominantGender = (town, npc) => {
  const temp = genderEqualityLikelihood.find(([threshold]) => {
    return threshold <= town.roll.equality
  })
  return npc.gender === temp[2]
}
