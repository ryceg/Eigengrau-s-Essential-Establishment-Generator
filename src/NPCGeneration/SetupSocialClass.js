// uses State.variables.npcs so can't be translated
/**
 * @type {import("../../lib/npc-generation/_common").SocialClassName[]}
 */
const socialClassArray = [
  'indentured servitude',
  'paupery',
  'peasantry',
  'commoner',
  'nobility',
  'aristocracy'
]

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

/**
 *
 * @param {import("../../lib/npc-generation/_common").SocialClassName} socialClass
 * @returns {import("../../lib/npc-generation/_common").SocialClassName}
 */
setup.relativeSocialClass = function (socialClass) {
  let classIndex = socialClassArray.indexOf(socialClass)
  if (classIndex < 0) classIndex = 3

  const delta = lib.rollFromTable(adultSocialMobilityTable, 100)

  const newIndex = Math.clamp(classIndex + delta, 0, socialClassArray.length - 1)
  return socialClassArray[newIndex]
}

/**
 * @param {import("./Relationships/createFamilyMembers").Marriage} marriage
 * @returns {import("../../lib/npc-generation/_common").SocialClassName}
 * @warn Uses State.variables.npcs
 * */
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
