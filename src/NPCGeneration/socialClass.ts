import type { Marriage, SocialClassName } from '@lib'

const socialClasses: SocialClassName[] = [
  'indentured servitude',
  'paupery',
  'peasantry',
  'commoner',
  'nobility',
  'aristocracy'
]

/**
 * Introduce modifiers for adult family members.
 */
const adultSocialMobilityTable: [number, number][] = [
  [6, -2],
  [18, -1],
  [60, 0],
  [14, 1],
  [2, 2]
]

export const relativeSocialClass = (socialClass: SocialClassName): SocialClassName => {
  let classIndex = socialClasses.indexOf(socialClass)
  if (classIndex < 0) classIndex = 3

  const delta = lib.rollFromTable(adultSocialMobilityTable, 100)

  const newIndex = Math.clamp(classIndex + delta, 0, socialClasses.length - 1)
  return socialClasses[newIndex]
}

/**
 * @warn Uses `State.variables.npcs`.
 */
export const familySocialClass = (marriage: Marriage): SocialClassName => {
  if (marriage.parents.length === 0) {
    if (marriage.children.length === 0) {
      return 'commoner'
    }
    return State.variables.npcs[marriage.children[0]].socialClass
  }

  const classArray = marriage.parents.map(key => {
    return socialClasses.indexOf(State.variables.npcs[key].socialClass)
  })
  const mean = Math.round(classArray.reduce((a, b) => a + b) / classArray.length)
  return socialClasses[mean]
}
