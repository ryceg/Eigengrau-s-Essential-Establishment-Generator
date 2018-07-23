setup.sizeFaction = function (faction) {
  // if (faction.ageRoll > 95) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 7)
  // } else if (faction.ageRoll > 90) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 6)
  // } else if (faction.ageRoll > 80) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 5)
  // } else if (faction.ageRoll > 70) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 4)
  // } else if (faction.ageRoll > 60) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 3)
  // } else if (faction.ageRoll > 55) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 2)
  // } else if (faction.ageRoll > 50) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 1)
  // } else if (faction.ageRoll > 45) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, -1)
  // } else if (faction.ageRoll > 40) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, -1)
  // } else if (faction.ageRoll > 30) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, -2)
  // } else if (faction.ageRoll > 20) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, -3)
  // } else if (faction.ageRoll > 10) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, -4)
  // } else if (faction.ageRoll <= 5) {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, -5)
  // } else {
  //   faction.sizeRoll += Math.fm(faction.sizeRoll, 1)
  // }

  if (faction.ageRoll > 95) {
    faction.sizeRoll += 7
  } else if (faction.ageRoll > 90) {
    faction.sizeRoll += 6
  } else if (faction.ageRoll > 80) {
    faction.sizeRoll += 5
  } else if (faction.ageRoll > 70) {
    faction.sizeRoll += 4
  } else if (faction.ageRoll > 60) {
    faction.sizeRoll += 3
  } else if (faction.ageRoll > 55) {
    faction.sizeRoll += 2
  } else if (faction.ageRoll > 50) {
    faction.sizeRoll += 1
  } else if (faction.ageRoll > 45) {
    faction.sizeRoll += -1
  } else if (faction.ageRoll > 40) {
    faction.sizeRoll += -1
  } else if (faction.ageRoll > 30) {
    faction.sizeRoll += -2
  } else if (faction.ageRoll > 20) {
    faction.sizeRoll += -3
  } else if (faction.ageRoll > 10) {
    faction.sizeRoll += -4
  } else if (faction.ageRoll <= 5) {
    faction.sizeRoll += -5
  } else {
    faction.sizeRoll += 1
  }

  if (faction.sizeRoll > 95) {
    faction.size = 'huge'
  } else if (faction.sizeRoll > 90) {
    faction.size = 'very large'
  } else if (faction.sizeRoll > 80) {
    faction.size = 'quite large'
  } else if (faction.sizeRoll > 70) {
    faction.size = 'large'
  } else if (faction.sizeRoll > 60) {
    faction.size = 'above average sized'
  } else if (faction.sizeRoll > 55) {
    faction.size = 'slightly above average sized'
  } else if (faction.sizeRoll > 50) {
    faction.size = 'average sized'
  } else if (faction.sizeRoll > 45) {
    faction.size = 'slightly below average sized'
  } else if (faction.sizeRoll > 40) {
    faction.size = 'somewhat small'
  } else if (faction.sizeRoll > 30) {
    faction.size = 'quite small'
  } else if (faction.sizeRoll > 20) {
    faction.size = 'very small'
  } else if (faction.sizeRoll > 10) {
    faction.size = 'tiny'
  } else if (faction.sizeRoll <= 5) {
    faction.size = 'a handful of members'
  } else {
    faction.size = 'average'
  }

  return faction.size
}
