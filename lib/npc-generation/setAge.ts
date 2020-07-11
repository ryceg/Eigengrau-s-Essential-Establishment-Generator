import { raceTraits, AgeName, RaceName } from './raceTraits'
import { NPC } from './_common'

export function setAge (npc: NPC): void{
  console.log(`ageing ${npc.name}...`)

  const ageDescriptors = raceTraits[npc.race].ageTraits.ageDescriptors

  if (typeof ageDescriptors !== 'undefined') {
    for (const [ageThreshold, ageDescriptor] of ageDescriptors) {
      if (ageThreshold <= npc.ageYears) {
        npc.age = ageDescriptor
      }
    }
  } else {
    console.log('Called age descriptor without a valid array.')
  }

  if (npc.ageStage === 'child') {
    npc.hasClass = false
    npc.profession = npc.age
    npc.background = 'child'
  }
}

export function isOfAge (ageStage: AgeName, race: RaceName, ageYears: number): boolean {
  return ageYears >= raceTraits[race].ageTraits[ageStage].baseAge
}
