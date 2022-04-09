/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NPC, Town } from '@lib'

export const createLifeEvents = (town: Town, npc: NPC) => {
  lib.logger.openGroup(`creating life events for ${npc.name}...`)
  let lifeEventsNumber: number

  npc.lifeEvents = []
  if (npc.ageYears > 60) {
    lifeEventsNumber = lib.dice(2, 6)
  } else if (npc.ageYears > 50) {
    lifeEventsNumber = lib.random(1, 7)
  } else if (npc.ageYears > 40) {
    lifeEventsNumber = lib.random(1, 5)
  } else if (npc.ageYears > 30) {
    lifeEventsNumber = lib.random(1, 4)
  } else if (npc.ageYears > 20) {
    lifeEventsNumber = lib.random(1, 2)
  } else if (npc.ageYears > 15) {
    lifeEventsNumber = 1
  } else {
    lifeEventsNumber = 0
    npc.lifeEvents.push(lib.random([
      "One time I got pushed over and nearly cried but I didn't",
      'I once saw a really big dog',
      'I found a cool stick that looks exactly like a sword',
      "I made a new friend who is teaching me how to read using daddy's important papers",
      'I made a kite!'
    ]))
  }

  for (let i = 0; i < lifeEventsNumber; i++) {
    // @ts-ignore
    npc.lifeEvents.push(lib.weightedRandomFetcher(town, setup.npcData.lifeEvents, npc))
  }

  lib.logger.closeGroup()
}
