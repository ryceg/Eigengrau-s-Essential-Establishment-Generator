import { articles } from '../src/articles'
import { NPC } from './_common'

export function createDescriptors (npc: NPC): string[] {
  console.log(`assigning descriptors to ${npc.name}...`)

  /**
   * Remember adjectival precedence!
   * @see https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Style-Guide#adjectives
   */
  const descriptors = [
    `${npc.age || npc.ageStage} ${npc.raceName}`,
    `${npc.skinColour} skinned ${lib.random([npc.weight, npc.height])} ${npc.raceName}`,
    `${lib.random([npc.weight, npc.height])} ${npc.raceName}`,
    `${lib.random([npc.height, npc.age])} ${npc.gender} with ${npc.physicalTrait}`
  ]

  switch (npc.ageStage) {
    case 'child':
      descriptors.push(`${lib.random([lib.raceTraits[npc.race].raceWords.raceAdjective, npc.height])} ${npc.boygirl}`)
      break
    default:
      switch (npc.race) {
        case 'human':
          descriptors.push(`${lib.random([npc.weight, npc.height])} ${npc.manwoman}`)
          break
        default:
          descriptors.push(`${lib.random([npc.weight, npc.height])} ${npc.malefemale} ${npc.raceName}`)
          descriptors.push(`${lib.random([npc.weight, npc.height])} ${lib.raceTraits[npc.race].raceWords.raceAdjective} ${npc.manwoman}`)
      }
  }

  if (npc.beard) {
    descriptors.push(`${npc.raceName} with ${articles.output(npc.beard)}`)
  }

  return descriptors
}
