
setup.socialClasses = [
  [195, 'aristocracy', 5],
  [95, 'aristocracy', 5],
  [80, 'nobility', 4],
  // [75, 'high class'],
  // [65, 'upper-middle class'],
  [60, 'commoner', 3],
  // [40, 'lower-middle class'],
  [20, 'peasantry', 2],
  [10, 'paupery', 1],
  [0, 'indentured servitude', 0]
]
setup.socialClassArray = ['indentured servitude', 'paupery', 'peasantry', 'commoner', 'nobility', 'aristocracy']
setup.socialClassKeys = {
  'aristocracy': 5,
  'nobility': 4,
  'commoner': 3,
  'peasantry': 2,
  'paupery': 1,
  'indentured servitude': 0
}

setup.createSocialClass = function (town, npc) {
  console.log('Creating social class...')

  if (!npc.roll) {
    npc.roll = {}
  }
  const profession = setup.findProfession(town, npc)

  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll || 40 + dice(8, 6)

  console.log({ npc })
  if (!npc.socialClass) {
    console.log('Social class not predefined. Searching for the social class of a ' + npc.profession + '...')
    // if .socialClass is defined in the professions.js, then that's all dandy.
    if (profession.socialClass) {
      npc.socialClass = profession.socialClass
      return npc
    // otherwise, just roll some dice.
    } else {
      console.log('No synonyms found for ' + npc.dndClass)
      const array = setup.socialClasses.find(function (desc) {
        return desc[0] <= npc.roll.socialClass
      })
      npc.socialClass = array[1]
      console.log('Unidentified profession- ' + npc.profession + ' does not exist in townData.professions!')
    }
  }
  if (npc.socialClass === undefined) {
    console.log('Failed to set a social class that matched the roll of ' + npc.roll.socialClass + ' for ' + npc.name + '.')
    npc.socialClass = setup.socialClasses[random(0, setup.socialClasses.length - 1)]
  }
  return npc
}

// Introduce modifiers for adult family members.
setup.adultSocialMobilityTable = [
  [6, -2],
  [18, -1],
  [60, 0],
  [14, 1],
  [2, 2]
]

setup.relativeSocialClass = function (npcClass) {
  let classIndex = setup.socialClassKeys[npcClass]
  if (classIndex < 0) classIndex = 3

  const delta = setup.rollFromTable(setup.adultSocialMobilityTable, 100)

  const newIndex = Math.clamp(classIndex + delta, 0, setup.socialClassArray.length - 1)
  return setup.socialClassArray[newIndex]
}

setup.familySocialClass = function (marriage) {
  if (marriage.parents.length === 0) {
    if (marriage.children.length === 0) {
      return 'commoner'
    } else {
      return State.variables.npcs[marriage.children[0]].socialClass
    }
  } else {
    const classArray = marriage.parents.map(key =>
      setup.socialClassKeys[State.variables.npcs[key].socialClass])

    const mean = Math.round(classArray.reduce((a, b) => (a + b)) / classArray.length)
    return setup.socialClassArray[mean]
  }
}
