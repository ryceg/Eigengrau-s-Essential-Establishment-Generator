setup.stabilityFaction = function (faction) {
  // switch (faction.leadershipType) {
  //   case 'individual':
  //     faction.stabilityRoll += [Math.fm(faction.stabilityRoll, 10), Math.fm(faction.stabilityRoll, -10)].random()
  //     break
  //   case 'group':
  //     faction.stabilityRoll += [Math.fm(faction.stabilityRoll, 2), Math.fm(faction.stabilityRoll, -30)].random()
  // }

  if (faction.stabilityRoll > 95) {
    faction.stability = 'rock solid'
  } else if (faction.stabilityRoll > 90) {
    faction.stability = 'very stable'
  } else if (faction.stabilityRoll > 80) {
    faction.stability = 'quite stable'
  } else if (faction.stabilityRoll > 70) {
    faction.stability = 'stable'
  } else if (faction.stabilityRoll > 60) {
    faction.stability = 'mostly stable'
  } else if (faction.stabilityRoll > 55) {
    faction.stability = 'relatively stable'
  } else if (faction.stabilityRoll > 50) {
    faction.stability = 'stable'
  } else if (faction.stabilityRoll > 45) {
    faction.stability = 'relatively unstable'
  } else if (faction.stabilityRoll > 40) {
    faction.stability = 'somewhat unstable'
  } else if (faction.stabilityRoll > 30) {
    faction.stability = 'quite unstable'
  } else if (faction.stabilityRoll > 20) {
    faction.stability = 'very unstable'
  } else if (faction.stabilityRoll > 10) {
    faction.stability = 'rapidly disintegrating'
  } else if (faction.stabilityRoll <= 5) {
    faction.stability = 'falling to pieces'
  } else {
    faction.stability = 'stable'
  }

  return faction
}
