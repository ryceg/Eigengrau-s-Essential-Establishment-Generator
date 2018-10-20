setup.sizeFaction = function (town, faction) {
  // if (faction.ageRoll > 95) {
  //   Math.fm(faction.sizeRoll, 30)
  // } else if (faction.ageRoll > 90) {
  //   Math.fm(faction.sizeRoll, 25)
  // } else if (faction.ageRoll > 80) {
  //   Math.fm(faction.sizeRoll, 20)
  // } else if (faction.ageRoll > 70) {
  //   Math.fm(faction.sizeRoll, 15)
  // } else if (faction.ageRoll > 60) {
  //   Math.fm(faction.sizeRoll, 10)
  // } else if (faction.ageRoll > 55) {
  //   Math.fm(faction.sizeRoll, 5)
  // } else if (faction.ageRoll > 50) {
  //   Math.fm(faction.sizeRoll, 5)
  // } else if (faction.ageRoll > 45) {
  //   Math.fm(faction.sizeRoll, -5)
  // } else if (faction.ageRoll > 40) {
  //   Math.fm(faction.sizeRoll, -10)
  // } else if (faction.ageRoll > 30) {
  //   Math.fm(faction.sizeRoll, -15)
  // } else if (faction.ageRoll > 20) {
  //   Math.fm(faction.sizeRoll, -20)
  // } else if (faction.ageRoll > 10) {
  //   Math.fm(faction.sizeRoll, -25)
  // } else if (faction.ageRoll <= 5) {
  //   Math.fm(faction.sizeRoll, -25)
  // } else {
  //   Math.fm(faction.sizeRoll, 2)
  // }
  //
  // if (town.population > 6000) {
  //   Math.fm(faction.sizeRoll, 25)
  // } else if (town.population > 5800) {
  //   Math.fm(faction.sizeRoll, 22)
  // } else if (town.population > 5400) {
  //   Math.fm(faction.sizeRoll, 20)
  // } else if (town.population > 5000) {
  //   Math.fm(faction.sizeRoll, 15)
  // } else if (town.population > 4500) {
  //   Math.fm(faction.sizeRoll, 10)
  // } else if (town.population > 4000) {
  //   Math.fm(faction.sizeRoll, 5)
  // } else if (town.population > 3500) {
  //   Math.fm(faction.sizeRoll, 5)
  // } else if (town.population > 3000) {
  //   Math.fm(faction.sizeRoll, 5)
  // } else if (town.population > 2500) {
  //   Math.fm(faction.sizeRoll, 5)
  // } else if (town.population > 2000) {
  //   Math.fm(faction.sizeRoll, -5)
  // } else if (town.population > 1500) {
  //   Math.fm(faction.sizeRoll, -15)
  // } else if (town.population > 1000) {
  //   Math.fm(faction.sizeRoll, -25)
  // } else if (town.population <= 1000) {
  //   Math.fm(faction.sizeRoll, -30)
  // } else {
  //   Math.fm(faction.sizeRoll, -10)
  // }

  if (faction.ageRoll > 95) {
    faction.sizeRoll += 20
  } else if (faction.ageRoll > 90) {
    faction.sizeRoll += 15
  } else if (faction.ageRoll > 80) {
    faction.sizeRoll += 12
  } else if (faction.ageRoll > 70) {
    faction.sizeRoll += 10
  } else if (faction.ageRoll > 60) {
    faction.sizeRoll += 5
  } else if (faction.ageRoll > 55) {
    faction.sizeRoll += 2
  } else if (faction.ageRoll > 50) {
    faction.sizeRoll += 1
  } else if (faction.ageRoll > 45) {
    faction.sizeRoll += -2
  } else if (faction.ageRoll > 40) {
    faction.sizeRoll += -5
  } else if (faction.ageRoll > 30) {
    faction.sizeRoll += -10
  } else if (faction.ageRoll > 20) {
    faction.sizeRoll += -15
  } else if (faction.ageRoll > 10) {
    faction.sizeRoll += -20
  } else if (faction.ageRoll <= 5) {
    faction.sizeRoll += -25
  } else {
    faction.sizeRoll += 2
  }

  if (town.population > 6000) {
    faction.sizeRoll += 25
  } else if (town.population > 5800) {
    faction.sizeRoll += 22
  } else if (town.population > 5400) {
    faction.sizeRoll += 20
  } else if (town.population > 5000) {
    faction.sizeRoll += 15
  } else if (town.population > 4500) {
    faction.sizeRoll += 10
  } else if (town.population > 4000) {
    faction.sizeRoll += 5
  } else if (town.population > 3500) {
    faction.sizeRoll += 5
  } else if (town.population > 3000) {
    faction.sizeRoll += 5
  } else if (town.population > 2500) {
    faction.sizeRoll += 5
  } else if (town.population > 2000) {
    faction.sizeRoll += -5
  } else if (town.population > 1500) {
    faction.sizeRoll += -15
  } else if (town.population > 1000) {
    faction.sizeRoll += -25
  } else if (town.population <= 1000) {
    faction.sizeRoll += -30
  } else {
    faction.sizeRoll += -10
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
    faction.size = 'miniscule'
  } else {
    faction.size = 'average'
  }

  return faction.size
}
