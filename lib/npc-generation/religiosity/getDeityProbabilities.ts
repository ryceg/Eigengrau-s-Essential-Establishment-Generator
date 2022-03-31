
import { Town } from '../../town/_common'
import { NPC } from '../_common'
import { Virtues } from '../traits/getTraits'

export function getDeityProbabilities (town: Town, npc: NPC, deities = lib.getFallbackDeities(town)): Record<string, {
  probability: number;
  name: string;
}> {
  const conformityMargin = 30
  if (npc.roll.conformity - town.roll.religiosity > conformityMargin) {
    const townDeity = {
      [town.religion.deity]: { name: town.religion.deity, probability: 100 }
    }
    return townDeity
  } else {
    const probabilities: Record<string, {
      probability: number;
      name: string;
    }> = {}
    for (const deity of deities) {
      probabilities[deity.name] = {
        probability: deity?.probabilityWeightings?.npc?.race?.[npc.race] || lib.rankProbabilities[deity.rank] || 10,
        name: deity.name
      }
      for (const prop in deity?.personality) {
        if (!prop) { break }
        const trait = prop as Virtues
        lib.addIfDefined(
          lib.compareRollToTarget(
            deity?.personality[trait],
            npc.roll.traits[trait],
            {
              bonus: 5,
              tolerance: 'both',
              maxDistance: 20
            }
          ),
          probabilities[deity.name].probability)
      }
    }
    return probabilities
  }
}
