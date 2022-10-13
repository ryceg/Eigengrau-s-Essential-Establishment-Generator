/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { NPC, Town } from '@lib'
import { createNPC } from './createNPC'

export const checkRaces = (town: Town, npcs: Record<string, NPC>): Record<string, NPC> => {
  lib.logger.openGroup('Validating race data...')
  for (const key of lib.keys(npcs)) {
    checkRace(town, npcs, key)
  }
  lib.logger.info('npcs:', npcs)
  lib.logger.closeGroup()
  return npcs
}

function checkRace (town: Town, npcs: Record<string, NPC>, npcKey: string) {
  const npc = npcs[npcKey]
  const isValidGender = lib.isValidNPCGender(town, npc)
  const race = lib.fetchRace(town)
  lib.logger.info(npc.race, 'to a', race)
  if (npc.race !== race || !isValidGender) {
    lib.logger.info(`${npc.name}'s race or gender now does not match! Changing ${npc.himher} from ${lib.articles.output(npc.race)} to ${lib.articles.output(race)}...`)

    npcs[npcKey] = createNPC(town, {
      race,
      gender: lib.getNpcGender(town, npc),
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
