/** @type {[number, string][]} */
const socialClasses = [
  [195, 'aristocracy'],
  [95, 'aristocracy'],
  [80, 'nobility'],
  [60, 'commoner'],
  [20, 'peasantry'],
  [10, 'paupery'],
  [0, 'indentured servitude']
]

const socialClassArray = [
  'indentured servitude',
  'paupery',
  'peasantry',
  'commoner',
  'nobility',
  'aristocracy'
]

setup.createSocialClass = function (town, npc) {
  console.log('Creating social class...')
  if (npc.socialClass) {
    return
  }

  const profession = lib.findProfession(town, npc)

  npc.roll = npc.roll || {}
  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll() || 40 + lib.dice(8, 6)

  console.log({ npc })
  console.log(`Social class not predefined. Searching for the social class of a ${npc.profession}...`)
  // If .socialClass is defined in the professions.js, then that's all dandy.
  if (profession.socialClass) {
    npc.socialClass = profession.socialClass
    return
  }

  // Otherwise, just roll some dice.
  console.log(`Unidentified profession- ${npc.profession} does not exist in townData.professions!`)
  const array = socialClasses.find(([threshold]) => {
    return threshold <= npc.roll.socialClass
  })

  if (array) {
    npc.socialClass = array[1]
    return
  }

  console.log(`Failed to set a social class that matched the roll of ${npc.roll.socialClass} for ${npc.name}.`)
  npc.socialClass = socialClasses[random(0, socialClasses.length - 1)]
}

/**
 * Introduce modifiers for adult family members.
 * @type {[number, number][]}
 */
const adultSocialMobilityTable = [
  [6, -2],
  [18, -1],
  [60, 0],
  [14, 1],
  [2, 2]
]

setup.relativeSocialClass = function (npcClass) {
  let classIndex = socialClassArray.indexOf(npcClass)
  if (classIndex < 0) classIndex = 3

  const delta = lib.rollFromTable(adultSocialMobilityTable, 100)

  const newIndex = Math.clamp(classIndex + delta, 0, socialClassArray.length - 1)
  return socialClassArray[newIndex]
}

setup.familySocialClass = function (marriage) {
  if (marriage.parents.length === 0) {
    if (marriage.children.length === 0) {
      return 'commoner'
    }
    return State.variables.npcs[marriage.children[0]].socialClass
  }

  const classArray = marriage.parents.map(key => {
    return socialClassArray.indexOf(State.variables.npcs[key].socialClass)
  })
  const mean = Math.round(classArray.reduce((a, b) => a + b) / classArray.length)
  return socialClassArray[mean]
}
