// uses setup.npcData.lifeEvents so can't be translated
/**
 * @param {import("../../lib/town/_common").Town} town
 * @param {import("../../lib/npc-generation/_common").NPC} npc
 */
setup.createLifeEvents = function (town, npc) {
  console.groupCollapsed(`creating life events for ${npc.name}...`)
  let lifeEventsNumber

  npc.lifeEvents = []
  if (npc.ageYears > 60) {
    lifeEventsNumber = lib.dice(2, 6)
  } else if (npc.ageYears > 50) {
    lifeEventsNumber = random(1, 7)
  } else if (npc.ageYears > 40) {
    lifeEventsNumber = random(1, 5)
  } else if (npc.ageYears > 30) {
    lifeEventsNumber = random(1, 4)
  } else if (npc.ageYears > 20) {
    lifeEventsNumber = random(1, 2)
  } else if (npc.ageYears > 15) {
    lifeEventsNumber = 1
  } else if (npc.ageYears <= 15) {
    lifeEventsNumber = 0
    npc.lifeEvents = [[
      "One time I got pushed over and nearly cried but I didn't",
      'I once saw a really big dog',
      'I found a cool stick that looks exactly like a sword',
      "I made a new friend who is teaching me how to read using daddy's important papers",
      'I made a kite!'
    ].random()]
  }

  for (let i = 0; i < lifeEventsNumber; i++) {
    /** @returns {string} */
    npc.lifeEvents.push(lib.weightedRandomFetcher(town, setup.npcData.lifeEvents, npc))
  }

  console.groupEnd()
}
