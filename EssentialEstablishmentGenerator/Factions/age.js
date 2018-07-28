setup.ageFaction = function (faction) {
  if (faction.ageRoll > 95) {
    faction.age = 'ancient'
  } else if (faction.ageRoll > 90) {
    faction.age = 'extremely old'
  } else if (faction.ageRoll > 80) {
    faction.age = 'very old'
  } else if (faction.ageRoll > 70) {
    faction.age = 'quite old'
  } else if (faction.ageRoll > 60) {
    faction.age = 'well established'
  } else if (faction.ageRoll > 55) {
    faction.age = 'somewhat old'
  } else if (faction.ageRoll > 50) {
    faction.age = 'relatively new'
  } else if (faction.ageRoll > 45) {
    faction.age = 'recently established'
  } else if (faction.ageRoll > 40) {
    faction.age = 'new'
  } else if (faction.ageRoll > 30) {
    faction.age = 'quite new'
  } else if (faction.ageRoll > 20) {
    faction.age = 'very new'
  } else if (faction.ageRoll > 10) {
    faction.age = 'brand new'
  } else if (faction.ageRoll <= 5) {
    faction.age = 'unknown'
  } else {
    faction.age = 'well established'
  }
  return faction.age
}
