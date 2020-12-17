// uses setup.createNPC
/**
 *
 * @param {import("../../lib/town/_common").Town} town
 * @param {Record<string, NPC>} npcs
 * @returns {Record<string, NPC>}
 */
setup.checkRaces = function (town, npcs) {
  console.groupCollapsed('Checking the races...')
  console.log({ npcs })
  for (const npcKey in npcs) {
    const npc = npcs[npcKey]
    const race = lib.fetchRace(town, npc)
    console.log(npc.race, 'to a', race)
    if (npc.race !== race) {
      console.log(`${npc.name}'s race now does not match! Changing ${npc.himher} from ${lib.articles.output(npc.race)} to ${lib.articles.output(race)}...`)
      npcs[npcKey] = setup.createNPC(town, {
        race,
        keyIsAlreadyDefined: true,
        key: npc.key,
        gender: npc.gender,
        profession: npc.profession,
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
  console.log('npcs:')
  console.log(npcs)
  console.groupEnd()
  return npcs
}
