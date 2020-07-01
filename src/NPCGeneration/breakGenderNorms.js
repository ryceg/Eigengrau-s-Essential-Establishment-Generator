/**
 * town.roll.equality, change of breaking gender norm
 * @type {[number, number, string, string][]}
 */
const genderEqualityLikelihood = [
  [139, 10, 'woman', 'man'],
  [99, 10, 'woman', 'man'],
  [90, 15, 'woman', 'man'],
  [80, 20, 'woman', 'man'],
  [70, 30, 'woman', 'man'],
  [60, 40, 'woman', 'man'],
  [55, 60, 'woman', 'man'],
  [50, 100, 'man', 'woman'],
  [45, 60, 'man', 'woman'],
  [40, 50, 'man', 'woman'],
  [30, 40, 'man', 'woman'],
  [20, 30, 'man', 'woman'],
  [10, 20, 'man', 'woman'],
  [5, 15, 'man', 'woman'],
  [-101, 10, 'man', 'woman']
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

setup.initSexistProfession = (town, npc) => {
  if (npc.profession && !npc.gender) {
    if (setup.breakGenderNorms(town, npc) === false) {
      const newGender = checkProfessionGender(town, npc.profession)
      if (newGender !== false) {
        npc.gender = newGender
      }
    } else {
      npc.isBreakingGenderNorms = true
    }
  }
  return npc
}

function checkProfessionGender (town, professionString) {
  const profession = setup.findProfession(town, '', professionString)
  const genders = genderEqualityLikelihood.find(([threshold]) => {
    return threshold <= town.roll.equality
  })
  switch (genders.indexOf(profession.domsub)) {
    case 2:
      return genders[2]
    case 3:
      return genders[3]
    default:
      return false
  }
}
