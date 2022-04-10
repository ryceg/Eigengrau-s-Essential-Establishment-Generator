import { genderData, GenderName, GenderPronouns } from '../genderData'

export function getPronoun (gender: GenderName, pronoun: keyof GenderPronouns): string {
  const result = genderData[gender][pronoun]
  if (!result) throw new Error(`No pronoun that matches the ${gender} gender and ${pronoun} pronoun!`)
  return result
}
