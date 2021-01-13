import type { Marriage } from '@lib'

/**
 * Given a marriage with at least one child, determine parent surnames
 * @warn Uses State.variables.npcs
 */
export const getParentSurnames = (marriage: Marriage) => {
  let familyName: string
  let fatherSurname: string | undefined
  let motherSurname: string | undefined

  if (marriage.children.length) {
    familyName = State.variables.npcs[marriage.children[0]].lastName
    fatherSurname = familyName
    motherSurname = undefined
    if (marriageIsMatrilineal(marriage)) {
      [fatherSurname, motherSurname] = [motherSurname, fatherSurname]
    }
  }

  return { fatherSurname, motherSurname }
}

/**
 * Given a marriage with at least one parent or child, determine child surnames
 * @warn uses State.variables.npcs
 */
export const getChildSurname = (marriage: Marriage) => {
  const { npcs } = State.variables

  if (marriage.children.length > 0) {
    const [firstChild] = marriage.children
    return npcs[firstChild].lastName
  }

  if (marriage.parents.length > 0) {
    const familyGender = marriageIsMatrilineal(marriage) ? 'woman' : 'man'
    const maidenGender = lib.getOppositeGender(familyGender)

    let head = marriage.parents.find(key => npcs[key].gender === familyGender)
    if (head) return npcs[head].lastName

    head = marriage.parents.find(key => npcs[key].gender === maidenGender)
    if (head) return npcs[head].lastName
  }
}

/**
 * Uses State.variables.npcs
 * TODO: test matrilineal marriages
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const marriageIsMatrilineal = (marriage: Marriage) => {
  return false
}
