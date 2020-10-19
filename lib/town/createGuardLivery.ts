import { random } from '../src/random'
import { guardData } from '../src/guardData'

export function createGuardLivery () {
  const insignia = random(guardData.insignia)
  const primaryColour = random(guardData.primaryColours)
  const secondaryColour = random(guardData.secondaryColours)
  return `${primaryColour} and ${secondaryColour} livery adorned with an image of ${insignia}`
}
