import { fm, dice } from '..'
import { ThresholdTable } from '../src/rollFromTable'
import { Town } from '../town/_common'
import { NPC } from './_common'
import { random } from '../src/random'

export type ReligionStrength =
'fanatical true believer' |
'unshakingly devoted believer' |
'conspicuously faithful believer' |
'outspoken believer' |
'quiet true believer' |
'casual observer' |
'open-minded seeker' |
'cautious listener' |
'critical student' |
'outspoken cynic' |
'broken heretic'

export const religion = {
  strength: [
    // npc.name is a _______
    [100, 'fanatical true believer'],
    [90, 'unshakingly devoted believer'],
    [80, 'conspicuously faithful believer'],
    [70, 'outspoken believer'],
    [60, 'quiet true believer'],
    [50, 'casual observer'],
    [40, 'open-minded seeker'],
    [30, 'cautious listener'],
    [20, 'critical student'],
    [10, 'outspoken cynic'],
    [0, 'broken heretic']
  ] as ThresholdTable<ReligionStrength>
}

// uses setup.npcData.religion.strength
export function createReligiosity (town: Town, npc: NPC) {
  console.log(`Creating religion strength for ${npc.name}`)
  npc.roll.religiosity = fm(dice(2, 40) + 10, town.roll.religiosity - 50)
  npc.roll.religiosity = Math.clamp(npc.roll.religiosity, 1, 100)
  if (npc.religion.strength) {
    npc.roll.religiosity = getReligiosity(npc.religion.strength)
  } else {
    npc.religion.strength = getReligionStrength(npc.roll.religiosity)
  }
}

function getReligiosity (religionStrength: ReligionStrength): number {
  for (const [threshold, strength] of religion.strength) {
    if (strength === religionStrength) {
      return threshold + random(1, 5)
    }
  }
  return 0
}

function getReligionStrength (religiosityRoll: number): ReligionStrength {
  for (const [threshold, strength] of religion.strength) {
    if (threshold <= religiosityRoll) {
      return strength
    }
  }
  return 'quiet true believer'
}
