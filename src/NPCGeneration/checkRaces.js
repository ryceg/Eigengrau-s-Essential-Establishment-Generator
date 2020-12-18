// uses setup.createNPC
/**
 *
 * @param {import("../../lib/town/_common").Town} town
 * @param {Record<string, import("../../lib/npc-generation/_common").NPC>} npcs
 * @returns {Record<string, import("../../lib/npc-generation/_common").NPC>}
 */
setup.checkRaces = function (town, npcs) {
  console.groupCollapsed('Checking the races...')
  console.log({ npcs })
  for (const npcKey in npcs) {
    const npc = npcs[npcKey]
    const race = lib.fetchRace(town, npc)
    const gender = lib.validateNpcGender(town, npc)
    console.log(npc.race, 'to a', race)
    if (npc.race !== race || npc.gender !== gender) {
      console.log(`${npc.name}'s race or gender now does not match! Changing ${npc.himher} from ${lib.articles.output(npc.race)} to ${lib.articles.output(race)}...`)
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
  console.log('npcs:')
  console.log(npcs)
  console.groupEnd()
  return npcs
}
