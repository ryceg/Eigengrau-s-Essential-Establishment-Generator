import { articles } from '../src/articles'
import { NPC } from './_common'

const getHumanOrRaceDescription = (npc: NPC) => {
  if (npc.race === 'human') return `${lib.random([npc.weight, npc.height])} ${npc.manwoman}`
  return `${lib.random([npc.weight, npc.height])} ${npc.malefemale} ${npc.raceName}`
}

export function createDescriptors (npc: NPC): string[] {
  console.log(`assigning descriptors to ${npc.name}...`)

  /**
   * Remember adjectival precedence!
   * @see https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Style-Guide#adjectives
   */
  const descriptors = [
    `${npc.age || npc.ageStage} ${npc.raceName} with ${npc.physicalTrait}`,
    `${npc.skinColour} skinned ${lib.random([npc.weight, npc.height])} ${npc.raceName}`,
    `${getHumanOrRaceDescription(npc)} with ${npc.physicalTrait}`,
    `${lib.random([npc.height, npc.age])} ${npc.gender} with ${npc.physicalTrait}`
  ]

  switch (npc.ageStage) {
    case 'child':
      descriptors.push(`${lib.random([lib.raceTraits[npc.race].raceWords.raceAdjective, npc.height])} ${npc.boygirl}`)
      break
    default:
      switch (npc.race) {
        case 'human':
          break
        default:
          descriptors.push(
            getHumanOrRaceDescription(npc),
            `${lib.random([npc.weight, npc.height])} ${lib.raceTraits[npc.race].raceWords.raceAdjective} ${npc.manwoman}`
          )
      }
  }

  if (npc.beard) {
    descriptors.push(`${npc.raceName} with ${articles.output(npc.beard)}`)
  }

  return descriptors
}
