import type { NPC } from '@lib'

export const getLifeEvents = (npc: NPC) => {
  if (npc.lifeEvents.length === 2) {
    const [first, second] = npc.lifeEvents
    return `When I was younger, ${first} Later in my life, ${second}`
  }

  if (npc.lifeEvents.length === 1) {
    const [lifeEvent] = npc.lifeEvents
    const other = lib.random([
      'Nothing else really would stand out',
      "I'm afraid that's all that would impress the likes of you",
      "I'm afraid that I've still got quite a ways to go in the ways of impressive tales, that's about it.",
      "And that's really honestly about it...",
      "Uh, that's really the only interesting story I have, to be honest."
    ])
    return `This one time ${lifeEvent} ${other}`
  }

  const first = lib.first(npc.lifeEvents)
  const last = lib.last(npc.lifeEvents)

  const misc = npc.lifeEvents.slice(1, -1).reduce((total, lifeEvent) => {
    return total + lib.random([
      lifeEvent.toUpperFirst(),
      lifeEvent.toUpperFirst(),
      `How could I ever forget the time ${lifeEvent} `,
      `After that, ${lifeEvent}`,
      `Not to mention there was the time ${lifeEvent}`,
      `Oh, and I can't forget the time ${lifeEvent} `,
      `There was this one time, ${lifeEvent} `,
      `Once ${lifeEvent} `,
      `One time ${lifeEvent} `,
      `You might not believe it, but ${lifeEvent} `,
      `I forget exactly when, but at one point, ${lifeEvent} `,
      `At one point ${lifeEvent} `,
      `I'll always remember the time ${lifeEvent} `
    ])
  }, '')

  return `This one time ${first} ${misc} At one point, ${last}`
}
