setup.createSexuality = function (npc) {
  // this is just one person's efforts to increase diversity and make an attempt at relatively realistic sexuality modeling
  // I cannot guarantee exact representation, and make no promises for such a thing- this is, at the end of the day, meant to be a tool for DMs.
  // I would, however, be very open to feedback and ways that I could improve the system.

  // Using the Kinsey scale, bastardised to fit my methods.

  // if a partner exists, then we need to make sure that it's an acceptable gender.
  if (npc.partnerID !== undefined) {
    if (State.variables.npcs[npc.partnerID].gender === npc.gender) {
      npc.roll.kinsey = 6
      npc.roll.sexuality = 99
    } else {
      npc.roll.sexuality = 47 + dice(11, 4)
    }
  }

  if (!npc.roll.kinsey) {
    const roll = random(0, 100)
    npc.roll.sexuality = npc.roll.sexuality || roll || 47 + dice(13, 4)
    if (npc.roll.sexuality < 70) {
      npc.roll.kinsey = 0
    } else if (npc.roll.sexuality < 75) {
      npc.roll.kinsey = 1
    } else if (npc.roll.sexuality < 83) {
      npc.roll.kinsey = 2
    } else if (npc.roll.sexuality < 90) {
      npc.roll.kinsey = 3
    } else if (npc.roll.sexuality < 96) {
      npc.roll.kinsey = 4
    } else if (npc.roll.sexuality <= 100) {
      npc.roll.kinsey = 5
    } else {
      npc.roll.kinsey = 3
    }
  }
  const kinsey = {
    // true = male, false = female. Very basic function, am aware.
    0: {
      sexuality: 'heterosexual',
      partnerGenderProbability (npc) {
        return setup.npcData.gender[npc.gender].oppositeGender
      }
    },
    1: {
      sexuality: 'heterosexual with passing interest in other $currentNPC.menwomen',
      partnerGenderProbability (npc) {
        if (random(100) < 90) {
          return setup.npcData.gender[npc.gender].oppositeGender
        } else {
          return npc.gender
        }
      }
    },
    2: {
      sexuality: 'predominantly heterosexual, but with more than a passing interest in $currentNPC.menwomen',
      partnerGenderProbability (npc) {
        if (random(100) < 70) {
          return setup.npcData.gender[npc.gender].oppositeGender
        } else {
          return npc.gender
        }
      }
    },
    3: {
      sexuality: 'bisexual',
      partnerGenderProbability (npc) {
        if (random(100) < 50) {
          return setup.npcData.gender[npc.gender].oppositeGender
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
          return setup.npcData.gender[npc.gender].oppositeGender
        }
      }
    },
    5: {
      sexuality: 'homosexual with passing interest in the opposite sex',
      partnerGenderProbability (npc) {
        if (random(100) < 90) {
          return npc.gender
        } else {
          return setup.npcData.gender[npc.gender].oppositeGender
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
  Math.clamp(npc.roll.kinsey, 0, 6)

  Object.assign(npc, kinsey[npc.roll.kinsey])
  return npc
}
