setup.genderEqualityLikelihood = [
  // town.roll.equality, change of breaking gender norm
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

setup.breakGenderNorms = function (town, npc) {
  Math.clamp(town.roll.equality, 0, 100)
  if (settings.ignoreGender) { return true }

  const temp = setup.genderEqualityLikelihood.find(function (desc) {
    return desc[0] <= town.roll.equality
  })

  let percentage = temp[1]
  if (typeof percentage === 'undefined') {
    percentage = 50
  }
  if (random(1, 100) < percentage) {
    return true
  } else {
    return false
  }
}

setup.isDominantGender = function (town, npc) {
  const temp = setup.genderEqualityLikelihood.find(function (desc) {
    return desc[0] <= town.roll.equality
  })
  if (npc.gender === temp[2]) {
    return true
  } else {
    return false
  }
}
