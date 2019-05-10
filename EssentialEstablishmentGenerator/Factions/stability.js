setup.stabilityFaction = function (faction) {
  console.log('determining stability...')
  // switch (faction.leadershipType) {
  //   case 'individual':
  //     faction.roll.stability += [Math.fm(faction.roll.stability, 10), Math.fm(faction.roll.stability, -10)].seededrandom()
  //     break
  //   case 'group':
  //     faction.roll.stability += [Math.fm(faction.roll.stability, 2), Math.fm(faction.roll.stability, -30)].seededrandom()
  // }

  if (faction.roll.stability > 95) {
    faction.stability = 'rock solid'
  } else if (faction.roll.stability > 90) {
    faction.stability = 'very stable'
  } else if (faction.roll.stability > 80) {
    faction.stability = 'quite stable'
  } else if (faction.roll.stability > 70) {
    faction.stability = 'stable'
  } else if (faction.roll.stability > 60) {
    faction.stability = 'mostly stable'
  } else if (faction.roll.stability > 55) {
    faction.stability = 'relatively stable'
  } else if (faction.roll.stability > 50) {
    faction.stability = 'stable'
  } else if (faction.roll.stability > 45) {
    faction.stability = 'relatively unstable'
  } else if (faction.roll.stability > 40) {
    faction.stability = 'somewhat unstable'
  } else if (faction.roll.stability > 30) {
    faction.stability = 'quite unstable'
  } else if (faction.roll.stability > 20) {
    faction.stability = 'very unstable'
  } else if (faction.roll.stability > 10) {
    faction.stability = 'rapidly disintegrating'
  } else if (faction.roll.stability <= 5) {
    faction.stability = 'falling to pieces'
  } else {
    faction.stability = 'stable'
  }

  return faction
}
