setup.checkRaces = function (town, npcs) {
  console.groupCollapsed(`Checking the races...`)
  console.log({ npcs })
  for (const npcKey in npcs) {
    const npc = npcs[npcKey]
    const race = setup.fetchRace(town, npc)
    console.log(npc.race, race)
    if (npc.race !== race) {
      console.log(`${npc.name}'s race now does not match! Changing ${npc.pronouns.himher} from a ${npc.race} to a ${race}...`)
      npcs[npcKey] = setup.createNPC(town, {
        race,
        keyIsAlreadyDefined: true,
        key: npc.key,
        gender: npc.gender,
        profession: npc.profession,
        dndClass: npc.dndClass,
        hasClass: npc.hasClass,
        ageStage: npc.ageStage,
        physicalTrait: npc.physicalTrait,
        calmTrait: npc.calmTrait,
        stressTrait: npc.stressTrait,
        raceRoll: npc.raceRoll,
        roll: npc.roll
      })
    }
  }
  console.log(`npcs:`)
  console.log(npcs)
  console.groupEnd()
  return npcs
}
