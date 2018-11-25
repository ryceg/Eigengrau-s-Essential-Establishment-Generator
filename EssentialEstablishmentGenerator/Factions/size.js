setup.sizeFaction = function (town, faction) {
  console.log('giving it a size...')
  // if (faction.roll.age > 95) {
  //   Math.fm(faction.roll.size, 30)
  // } else if (faction.roll.age > 90) {
  //   Math.fm(faction.roll.size, 25)
  // } else if (faction.roll.age > 80) {
  //   Math.fm(faction.roll.size, 20)
  // } else if (faction.roll.age > 70) {
  //   Math.fm(faction.roll.size, 15)
  // } else if (faction.roll.age > 60) {
  //   Math.fm(faction.roll.size, 10)
  // } else if (faction.roll.age > 55) {
  //   Math.fm(faction.roll.size, 5)
  // } else if (faction.roll.age > 50) {
  //   Math.fm(faction.roll.size, 5)
  // } else if (faction.roll.age > 45) {
  //   Math.fm(faction.roll.size, -5)
  // } else if (faction.roll.age > 40) {
  //   Math.fm(faction.roll.size, -10)
  // } else if (faction.roll.age > 30) {
  //   Math.fm(faction.roll.size, -15)
  // } else if (faction.roll.age > 20) {
  //   Math.fm(faction.roll.size, -20)
  // } else if (faction.roll.age > 10) {
  //   Math.fm(faction.roll.size, -25)
  // } else if (faction.roll.age <= 5) {
  //   Math.fm(faction.roll.size, -25)
  // } else {
  //   Math.fm(faction.roll.size, 2)
  // }
  //
  // if (town.population > 6000) {
  //   Math.fm(faction.roll.size, 25)
  // } else if (town.population > 5800) {
  //   Math.fm(faction.roll.size, 22)
  // } else if (town.population > 5400) {
  //   Math.fm(faction.roll.size, 20)
  // } else if (town.population > 5000) {
  //   Math.fm(faction.roll.size, 15)
  // } else if (town.population > 4500) {
  //   Math.fm(faction.roll.size, 10)
  // } else if (town.population > 4000) {
  //   Math.fm(faction.roll.size, 5)
  // } else if (town.population > 3500) {
  //   Math.fm(faction.roll.size, 5)
  // } else if (town.population > 3000) {
  //   Math.fm(faction.roll.size, 5)
  // } else if (town.population > 2500) {
  //   Math.fm(faction.roll.size, 5)
  // } else if (town.population > 2000) {
  //   Math.fm(faction.roll.size, -5)
  // } else if (town.population > 1500) {
  //   Math.fm(faction.roll.size, -15)
  // } else if (town.population > 1000) {
  //   Math.fm(faction.roll.size, -25)
  // } else if (town.population <= 1000) {
  //   Math.fm(faction.roll.size, -30)
  // } else {
  //   Math.fm(faction.roll.size, -10)
  // }

  if (faction.roll.age > 95) {
    faction.roll.size += 20
  } else if (faction.roll.age > 90) {
    faction.roll.size += 15
  } else if (faction.roll.age > 80) {
    faction.roll.size += 12
  } else if (faction.roll.age > 70) {
    faction.roll.size += 10
  } else if (faction.roll.age > 60) {
    faction.roll.size += 5
  } else if (faction.roll.age > 55) {
    faction.roll.size += 2
  } else if (faction.roll.age > 50) {
    faction.roll.size += 1
  } else if (faction.roll.age > 45) {
    faction.roll.size += -2
  } else if (faction.roll.age > 40) {
    faction.roll.size += -5
  } else if (faction.roll.age > 30) {
    faction.roll.size += -10
  } else if (faction.roll.age > 20) {
    faction.roll.size += -15
  } else if (faction.roll.age > 10) {
    faction.roll.size += -20
  } else if (faction.roll.age <= 5) {
    faction.roll.size += -25
  } else {
    faction.roll.size += 2
  }

  if (town.population > 6000) {
    faction.roll.size += 25
  } else if (town.population > 5800) {
    faction.roll.size += 22
  } else if (town.population > 5400) {
    faction.roll.size += 20
  } else if (town.population > 5000) {
    faction.roll.size += 15
  } else if (town.population > 4500) {
    faction.roll.size += 10
  } else if (town.population > 4000) {
    faction.roll.size += 5
  } else if (town.population > 3500) {
    faction.roll.size += 5
  } else if (town.population > 3000) {
    faction.roll.size += 5
  } else if (town.population > 2500) {
    faction.roll.size += 5
  } else if (town.population > 2000) {
    faction.roll.size += -5
  } else if (town.population > 1500) {
    faction.roll.size += -15
  } else if (town.population > 1000) {
    faction.roll.size += -25
  } else if (town.population <= 1000) {
    faction.roll.size += -30
  } else {
    faction.roll.size += -10
  }

  if (faction.roll.size > 95) {
    faction.size = 'huge'
  } else if (faction.roll.size > 90) {
    faction.size = 'very large'
  } else if (faction.roll.size > 80) {
    faction.size = 'quite large'
  } else if (faction.roll.size > 70) {
    faction.size = 'large'
  } else if (faction.roll.size > 60) {
    faction.size = 'above average sized'
  } else if (faction.roll.size > 55) {
    faction.size = 'slightly above average sized'
  } else if (faction.roll.size > 50) {
    faction.size = 'average sized'
  } else if (faction.roll.size > 45) {
    faction.size = 'slightly below average sized'
  } else if (faction.roll.size > 40) {
    faction.size = 'somewhat small'
  } else if (faction.roll.size > 30) {
    faction.size = 'quite small'
  } else if (faction.roll.size > 20) {
    faction.size = 'very small'
  } else if (faction.roll.size > 10) {
    faction.size = 'tiny'
  } else if (faction.roll.size <= 5) {
    faction.size = 'miniscule'
  } else {
    faction.size = 'average'
  }

  return faction
}
