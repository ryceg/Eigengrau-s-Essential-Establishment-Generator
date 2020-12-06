/**
 * @param {import("../../../lib/npc-generation/_common").NPC} npc
 * @description this is just one person's efforts to increase diversity and make an attempt at relatively realistic sexuality modeling
   * I cannot guarantee exact representation, and make no promises for such a thing- this is, at the end of the day, meant to be a tool for DMs.
   * I would, however, be very open to feedback and ways that I could improve the system.
 * @warn Uses State.variables.npcs
 */
setup.createSexuality = function (npc) {
  // if a partner exists, then we need to make sure that they are an acceptable gender.
  if (npc.partnerID !== undefined) {
    if (State.variables.npcs[npc.partnerID].gender === npc.gender) {
      npc.roll.kinsey = 6
      npc.roll.sexuality = 99
    } else {
      npc.roll.sexuality = 47 + lib.dice(11, 4)
    }
  }

  if (!npc.roll.kinsey) {
    const roll = random(0, 100)
    npc.roll.sexuality = npc.roll.sexuality || roll || 47 + lib.dice(13, 4)
    npc.roll.kinsey = getKinseyRoll(npc.roll.sexuality)
  }
  /**
   * @type {Record <number, import("./createRelationship").Kinsey>}
   * @description true = male, false = female. Very basic function, am aware.
   */
  const kinsey = {
    0: {
      sexuality: 'heterosexual',
      partnerGenderProbability (npc) {
        return lib.getOppositeGender(npc.gender)
      }
    },
    1: {
      sexuality: 'heterosexual with passing interest in other $currentNPC.menwomen',
      partnerGenderProbability (npc) {
        if (random(100) < 90) {
          return lib.getOppositeGender(npc.gender)
        } else {
          return npc.gender
        }
      }
    },
    2: {
      sexuality: 'predominantly heterosexual, but with more than a passing interest in $currentNPC.menwomen',
      partnerGenderProbability (npc) {
        if (random(100) < 70) {
          return lib.getOppositeGender(npc.gender)
        } else {
          return npc.gender
        }
      }
    },
    3: {
      sexuality: 'bisexual',
      partnerGenderProbability (npc) {
        if (random(100) < 50) {
          return lib.getOppositeGender(npc.gender)
        } else {
          return npc.gender
        }
      }
    },
    4: {
      sexuality: 'mostly homosexual, but with more than a passing interest in the opposite sex',
      partnerGenderProbability (npc) {
        if (random(100) < 70) {
          return npc.gender
        } else {
          return lib.getOppositeGender(npc.gender)
        }
      }
    },
    5: {
      sexuality: 'homosexual with passing interest in the opposite sex',
      partnerGenderProbability (npc) {
        if (random(100) < 90) {
          return npc.gender
        } else {
          return lib.getOppositeGender(npc.gender)
        }
      }
    },
    6: {
      sexuality: 'homosexual',
      partnerGenderProbability (npc) {
        return npc.gender
      }
    }
  }
  // make sure that the kinsey hasn't strayed out of bounds.
  npc.roll.kinsey = Math.clamp(npc.roll.kinsey, 0, 6)

  Object.assign(npc, kinsey[npc.roll.kinsey])
}

/**
 * @param {number} sexualityRoll
 * @returns {number}
 */
function getKinseyRoll (sexualityRoll) {
  if (sexualityRoll < 70) return 0
  if (sexualityRoll < 75) return 1
  if (sexualityRoll < 83) return 2
  if (sexualityRoll < 90) return 3
  if (sexualityRoll < 96) return 4
  if (sexualityRoll <= 100) return 5
  return 3
}
