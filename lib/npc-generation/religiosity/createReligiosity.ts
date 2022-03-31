
import { Town } from '../../town/_common'
import { NPC } from '../_common'
import { random } from '../../src/random'
import { getDeityProbabilities } from './getDeityProbabilities'
import { pickDeity } from './pickDeity'
import { ReligionStrength } from '../../religion/religion'

// uses setup.npcData.religion.strength
export function createReligiosity (town: Town, npc: NPC) {
  console.log(`Creating religion strength for ${npc.name}`)
  npc.roll.religiosity = lib.fm(lib.dice(2, 40) + 10, town.roll.religiosity - 50)
  npc.roll.religiosity = Math.clamp(npc.roll.religiosity, 1, 100)
  if (npc.religion.strength) {
    npc.roll.religiosity = getReligiosity(npc.religion.strength)
  } else {
    npc.religion.strength = getReligionStrength(npc.roll.religiosity)
  }
  npc.religion.deity = pickDeity(npc.roll.gender, getDeityProbabilities(town, npc))
}

function getReligiosity (religionStrength: ReligionStrength): number {
  for (const [threshold, strength] of lib.religion.strength) {
    if (strength === religionStrength) {
      return threshold + random(1, 5)
    }
  }
  return 0
}

function getReligionStrength (religiosityRoll: number): ReligionStrength {
  for (const [threshold, strength] of lib.religion.strength) {
    if (threshold <= religiosityRoll) {
      return strength
    }
  }
  return 'quiet true believer'
}
