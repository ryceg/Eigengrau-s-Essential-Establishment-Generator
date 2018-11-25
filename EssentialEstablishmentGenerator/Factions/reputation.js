setup.reputationFaction = function (faction) {
  console.log('assigning a reputation...')
  switch (faction.age) {
    case 'ancient':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 30)
      break
    case 'extremely old':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 25)
      break
    case 'very old':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 20)
      break
    case 'quite old':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 15)
      break
    case 'well established':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 10)
      break
    case 'somewhat old':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 5)
      break
    case 'relatively new':
      faction.roll.reputation += Math.fm(faction.roll.reputation, -5)
      break
    case 'recently established':
      faction.roll.reputation += Math.fm(faction.roll.reputation, -10)
      break
    case 'new':
      faction.roll.reputation += Math.fm(faction.roll.reputation, -15)
      break
    case 'quite new':
      faction.roll.reputation += Math.fm(faction.roll.reputation, -20)
      break
    case 'very new':
      faction.roll.reputation += Math.fm(faction.roll.reputation, -25)
      break
    case 'brand new':
      faction.roll.reputation += Math.fm(faction.roll.reputation, -25)
      break
    case 'unknown':
      faction.roll.reputation += Math.fm(faction.roll.reputation, 15)
  }

  // switch (faction.age) {
  //   case 'ancient':
  //     faction.roll.reputation += 30
  //     break
  //   case 'extremely old':
  //     faction.roll.reputation += 25
  //     break
  //   case 'very old':
  //     faction.roll.reputation += 20
  //     break
  //   case 'quite old':
  //     faction.roll.reputation += 15
  //     break
  //   case 'well established':
  //     faction.roll.reputation += 10
  //     break
  //   case 'somewhat old':
  //     faction.roll.reputation += 5
  //     break
  //   case 'relatively new':
  //     faction.roll.reputation += -5
  //     break
  //   case 'recently established':
  //     faction.roll.reputation += -10
  //     break
  //   case 'new':
  //     faction.roll.reputation += -15
  //     break
  //   case 'quite new':
  //     faction.roll.reputation += -20
  //     break
  //   case 'very new':
  //     faction.roll.reputation += -25
  //     break
  //   case 'brand new':
  //     faction.roll.reputation += -25
  //     break
  //   case 'unknown':
  //     faction.roll.reputation += 15
  // }

  if (faction.roll.reputation > 95) {
    faction.reputation = 'excellent'
  } else if (faction.roll.reputation > 90) {
    faction.reputation = 'very good'
  } else if (faction.roll.reputation > 80) {
    faction.reputation = 'quite good'
  } else if (faction.roll.reputation > 70) {
    faction.reputation = 'good'
  } else if (faction.roll.reputation > 60) {
    faction.reputation = 'above average'
  } else if (faction.roll.reputation > 55) {
    faction.reputation = 'slightly above average'
  } else if (faction.roll.reputation > 50) {
    faction.reputation = 'average'
  } else if (faction.roll.reputation > 45) {
    faction.reputation = 'slightly below average'
  } else if (faction.roll.reputation > 40) {
    faction.reputation = 'poor'
  } else if (faction.roll.reputation > 30) {
    faction.reputation = 'quite poor'
  } else if (faction.roll.reputation > 20) {
    faction.reputation = 'very poor'
  } else if (faction.roll.reputation > 10) {
    faction.reputation = 'extremely poor'
  } else if (faction.roll.reputation <= 5) {
    faction.reputation = 'abysmal'
  } else {
    faction.reputation = 'average'
  }

  return faction
}
