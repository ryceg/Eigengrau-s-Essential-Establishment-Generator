setup.ageFaction = function (faction) {
  console.log('ageing...')
  if (faction.roll.age > 95) {
    faction.age = 'ancient'
  } else if (faction.roll.age > 90) {
    faction.age = 'extremely old'
  } else if (faction.roll.age > 80) {
    faction.age = 'very old'
  } else if (faction.roll.age > 70) {
    faction.age = 'quite old'
  } else if (faction.roll.age > 60) {
    faction.age = 'well established'
  } else if (faction.roll.age > 55) {
    faction.age = 'somewhat old'
  } else if (faction.roll.age > 50) {
    faction.age = 'relatively new'
  } else if (faction.roll.age > 45) {
    faction.age = 'recently established'
  } else if (faction.roll.age > 40) {
    faction.age = 'new'
  } else if (faction.roll.age > 30) {
    faction.age = 'quite new'
  } else if (faction.roll.age > 20) {
    faction.age = 'very new'
  } else if (faction.roll.age > 10) {
    faction.age = 'brand new'
  } else if (faction.roll.age <= 5) {
    faction.age = 'unknown'
  } else {
    faction.age = 'well established'
  }
  return faction.age
}
