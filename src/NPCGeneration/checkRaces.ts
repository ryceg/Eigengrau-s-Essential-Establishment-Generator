/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { NPC, Town } from '@lib'

/**
 * Uses `setup.createNPC`
 */
export const checkRaces = (town: Town, npcs: Record<string, NPC>): Record<string, NPC> => {
  console.groupCollapsed('Checking the races...')
  for (const key of lib.keys(npcs)) {
    checkRace(town, npcs, key)
  }
  console.log('npcs:', npcs)
  console.groupEnd()
  return npcs
}

function checkRace (town: Town, npcs: Record<string, NPC>, npcKey: string) {
  const npc = npcs[npcKey]
  const race = lib.fetchRace(town, npc)
  const gender = lib.validateNpcGender(town, npc)
  console.log(npc.race, 'to a', race)
  if (npc.race !== race || npc.gender !== gender) {
    console.log(`${npc.name}'s race or gender now does not match! Changing ${npc.himher} from ${lib.articles.output(npc.race)} to ${lib.articles.output(race)}...`)
    // @ts-ignore
    npcs[npcKey] = setup.createNPC(town, {
      race,
      gender,
      keyIsAlreadyDefined: true,
      key: npc.key,
      profession: npc.profession,
      background: npc.background,
      ageStage: npc.ageStage,
      socialClass: npc.socialClass,
      dndClass: npc.dndClass,
      hasClass: npc.hasClass,
      physicalTrait: npc.physicalTrait,
      calmTrait: npc.calmTrait,
      stressTrait: npc.stressTrait,
      raceRoll: npc.raceRoll,
      roll: npc.roll,
      religion: npc.religion
    })
  }
}
