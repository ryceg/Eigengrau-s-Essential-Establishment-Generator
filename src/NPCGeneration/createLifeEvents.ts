/* eslint-disable @typescript-eslint/ban-ts-comment */
import { dice, NPC, Town, weightedRandomFetcher } from '@lib'
import { random } from '../../lib/src/random'
// uses setup.npcData.lifeEvents so can't be translated
/**
 * @param {import("../../lib/town/_common").Town} town
 * @param {import("../../lib/npc-generation/_common").NPC} npc
 */
export const createLifeEvents = (town: Town, npc: NPC) => {
  console.groupCollapsed(`creating life events for ${npc.name}...`)
  let lifeEventsNumber: number

  npc.lifeEvents = []
  if (npc.ageYears > 60) {
    lifeEventsNumber = dice(2, 6)
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
  } else {
    lifeEventsNumber = 0
    npc.lifeEvents.push(random([
      "One time I got pushed over and nearly cried but I didn't",
      'I once saw a really big dog',
      'I found a cool stick that looks exactly like a sword',
      "I made a new friend who is teaching me how to read using daddy's important papers",
      'I made a kite!'
    ]))
  }

  for (let i = 0; i < lifeEventsNumber; i++) {
    /** @returns {string} */
    // @ts-ignore
    npc.lifeEvents.push(weightedRandomFetcher(town, setup.npcData.lifeEvents, npc))
  }

  console.groupEnd()
}
