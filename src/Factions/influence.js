
setup.influenceFaction = function (faction) {
  console.log('assigning influence...')
  if (faction.roll.age > 95) {
    faction.roll.influence += Math.fm(faction.roll.influence, 15)
  } else if (faction.roll.age > 90) {
    faction.roll.influence += Math.fm(faction.roll.influence, 10)
  } else if (faction.roll.age > 80) {
    faction.roll.influence += Math.fm(faction.roll.influence, 8)
  } else if (faction.roll.age > 70) {
    faction.roll.influence += Math.fm(faction.roll.influence, 6)
  } else if (faction.roll.age > 60) {
    faction.roll.influence += Math.fm(faction.roll.influence, 4)
  } else if (faction.roll.age > 55) {
    faction.roll.influence += Math.fm(faction.roll.influence, 2)
  } else if (faction.roll.age > 50) {
    faction.roll.influence += Math.fm(faction.roll.influence, 1)
  } else if (faction.roll.age > 45) {
    faction.roll.influence += Math.fm(faction.roll.influence, -1)
  } else if (faction.roll.age > 40) {
    faction.roll.influence += Math.fm(faction.roll.influence, -2)
  } else if (faction.roll.age > 30) {
    faction.roll.influence += Math.fm(faction.roll.influence, -4)
  } else if (faction.roll.age > 20) {
    faction.roll.influence += Math.fm(faction.roll.influence, -6)
  } else if (faction.roll.age > 10) {
    faction.roll.influence += Math.fm(faction.roll.influence, -8)
  } else if (faction.roll.age <= 5) {
    faction.roll.influence += Math.fm(faction.roll.influence, -10)
  } else {
    faction.roll.influence += Math.fm(faction.roll.influence, 10)
  }

  // if (faction.roll.age > 95) {
  //   faction.roll.influence += 15
  // } else if (faction.roll.age > 90) {
  //   faction.roll.influence += 10
  // } else if (faction.roll.age > 80) {
  //   faction.roll.influence += 8
  // } else if (faction.roll.age > 70) {
  //   faction.roll.influence += 6
  // } else if (faction.roll.age > 60) {
  //   faction.roll.influence += 4
  // } else if (faction.roll.age > 55) {
  //   faction.roll.influence += 2
  // } else if (faction.roll.age > 50) {
  //   faction.roll.influence += 1
  // } else if (faction.roll.age > 45) {
  //   faction.roll.influence += -1
  // } else if (faction.roll.age > 40) {
  //   faction.roll.influence += -2
  // } else if (faction.roll.age > 30) {
  //   faction.roll.influence += -4
  // } else if (faction.roll.age > 20) {
  //   faction.roll.influence += -6
  // } else if (faction.roll.age > 10) {
  //   faction.roll.influence += -8
  // } else if (faction.roll.age <= 5) {
  //   faction.roll.influence += -10
  // } else {
  //   faction.roll.influence += 10
  // }

  if (faction.roll.influence > 95) {
    faction.influence = 'excellent'
  } else if (faction.roll.influence > 90) {
    faction.influence = 'very good'
  } else if (faction.roll.influence > 80) {
    faction.influence = 'quite good'
  } else if (faction.roll.influence > 70) {
    faction.influence = 'good'
  } else if (faction.roll.influence > 60) {
    faction.influence = 'above average'
  } else if (faction.roll.influence > 55) {
    faction.influence = 'slightly above average'
  } else if (faction.roll.influence > 50) {
    faction.influence = 'average'
  } else if (faction.roll.influence > 45) {
    faction.influence = 'slightly below average'
  } else if (faction.roll.influence > 40) {
    faction.influence = 'poor'
  } else if (faction.roll.influence > 30) {
    faction.influence = 'quite poor'
  } else if (faction.roll.influence > 20) {
    faction.influence = 'very poor'
  } else if (faction.roll.influence > 10) {
    faction.influence = 'extremely poor'
  } else if (faction.roll.influence <= 5) {
    faction.influence = 'abysmal'
  } else {
    faction.influence = 'average'
  }

  return faction
}
