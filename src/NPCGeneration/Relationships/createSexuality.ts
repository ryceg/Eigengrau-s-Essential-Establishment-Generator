import type { GenderName, NPC } from '@lib'

/**
 * This is just one person's efforts to increase diversity and make an attempt at relatively realistic sexuality modeling
 * I cannot guarantee exact representation, and make no promises for such a thing- this is, at the end of the day, meant to be a tool for DMs.
 * I would, however, be very open to feedback and ways that I could improve the system.
 * @warn Uses State.variables.npcs
 */
export const createSexuality = (npc: NPC) => {
  // If a partner exists, then we need to make sure that they are an acceptable gender.
  if (typeof npc.partnerID !== 'undefined') {
    if (State.variables.npcs[npc.partnerID].gender === npc.gender) {
      npc.roll.kinsey = 6
      npc.roll.sexuality = 99
    } else {
      npc.roll.sexuality = 47 + lib.dice(11, 4)
    }
  }

  if (!npc.roll.kinsey) {
    const roll = random(1, 100)
    npc.roll.sexuality = npc.roll.sexuality || roll || 47 + lib.dice(13, 4)
    npc.roll.kinsey = getKinseyRoll(npc.roll.sexuality)
  }

  // Make sure that the kinsey hasn't strayed out of bounds.
  npc.roll.kinsey = Math.clamp(npc.roll.kinsey, 0, 6)

  Object.assign(npc, {
    sexuality: kinsey[npc.roll.kinsey].sexuality
  })
}

function getKinseyRoll (sexualityRoll: number): number {
  if (sexualityRoll < 70) return 0
  if (sexualityRoll < 75) return 1
  if (sexualityRoll < 83) return 2
  if (sexualityRoll < 90) return 3
  if (sexualityRoll < 96) return 4
  if (sexualityRoll <= 100) return 5
  return 3
}

export const getPartnerGender = (npc: NPC) => {
  return kinsey[npc.roll.kinsey].partnerGenderProbability(npc)
}

interface Kinsey {
  sexuality: string
  partnerGenderProbability(npc: NPC): GenderName
}

const kinsey: Record<number, Kinsey> = {
  0: {
    sexuality: 'heterosexual',
    partnerGenderProbability (npc) {
      return lib.getOppositeGender(npc.gender)
    }
  },
  1: {
    sexuality: 'primarily prefers other genders, but sometimes finds the same gender attractive',
    partnerGenderProbability (npc) {
      return random(100) < 90 ? lib.getOppositeGender(npc.gender) : npc.gender
    }
  },
  2: {
    sexuality: 'predominantly prefers other genders, but sometimes finds the same gender attractive',
    partnerGenderProbability (npc) {
      return random(100) < 70 ? lib.getOppositeGender(npc.gender) : npc.gender
    }
  },
  3: {
    sexuality: 'bisexual',
    partnerGenderProbability (npc) {
      return random(100) < 50 ? npc.gender : lib.getOppositeGender(npc.gender)
    }
  },
  4: {
    sexuality: 'predominantly prefers the same gender, but finds other genders attractive',
    partnerGenderProbability (npc) {
      return random(100) < 70 ? npc.gender : lib.getOppositeGender(npc.gender)
    }
  },
  5: {
    sexuality: 'prefers the same gender, but sometimes finds other genders attractive',
    partnerGenderProbability (npc) {
      return random(100) < 90 ? npc.gender : lib.getOppositeGender(npc.gender)
    }
  },
  6: {
    sexuality: 'homosexual',
    partnerGenderProbability (npc) {
      return npc.gender
    }
  }
}
