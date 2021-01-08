import { articles } from '../src/articles'
import { NPC } from './_common'
export function createDescriptors (npc: NPC): void {
  console.log(`assigning descriptors to ${npc.name}...`)
  // remember adjectival precedence!
  /** @see https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Style-Guide#adjectives */
  const descriptors = [
    `${npc.age || npc.ageStage} ${npc.raceName}`,
    `${npc.skinColour} skinned ${npc.height} ${npc.raceName}`,
    `${npc.weight || npc.height} ${npc.raceName}`,
    `${npc.weight || npc.height} ${npc.malefemale} ${npc.raceName}`,
    `${npc.height || npc.age} ${npc.gender} with ${npc.physicalTrait}`
  ]

  if (npc.beard) {
    descriptors.push(`${npc.raceName} with ${articles.output(npc.beard)}`)
  }

  npc.descriptors = descriptors
}
