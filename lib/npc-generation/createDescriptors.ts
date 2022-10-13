import { logger } from '../logger'
import { articles } from '../src/articles'
import { random } from '../src/random'
import { NPC } from './_common'
import { raceTraits } from './raceTraits'

const getHumanOrRaceDescription = (npc: NPC) => {
  if (npc.race === 'human') {
    return `${random([npc.weight, npc.height])} ${npc.manwoman}`
  }
  return `${random([npc.weight, npc.height])} ${npc.malefemale} ${npc.raceName}`
}

export function createDescriptors (npc: NPC): string[] {
  logger.info(`Assigning descriptors to ${npc.name}...`)

  /**
   * Remember adjectival precedence!
   * @see https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Style-Guide#adjectives
   */
  const descriptors = [
    `${npc.age || npc.ageStage} ${npc.raceName} with ${npc.physicalTrait}`,
    `${npc.skinColour} skinned ${random([npc.weight, npc.height])} ${npc.raceName}`,
    `${getHumanOrRaceDescription(npc)} with ${npc.physicalTrait}`,
    `${random([npc.height, npc.age])} ${npc.gender} with ${npc.physicalTrait}`
  ]

  switch (npc.ageStage) {
    case 'child':
      descriptors.push(`${random([raceTraits[npc.race].raceWords.raceAdjective, npc.height])} ${npc.boygirl}`)
      break
    default:
      switch (npc.race) {
        case 'human':
          break
        default:
          descriptors.push(
            getHumanOrRaceDescription(npc),
            `${random([npc.weight, npc.height])} ${raceTraits[npc.race].raceWords.raceAdjective} ${npc.manwoman}`
          )
      }
  }

  if (npc.beard) {
    descriptors.push(`${npc.raceName} with ${articles.output(npc.beard)}`)
  }

  return descriptors
}
