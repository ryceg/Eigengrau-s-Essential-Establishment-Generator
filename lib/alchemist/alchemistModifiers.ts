import { Alchemist } from './_common'

export function alchemistModifiers (alchemist: Alchemist) {
  alchemist.roll.activity += getSizeModifierForActivity(alchemist.roll.size)

  switch (alchemist.material.noun) {
    case 'hewn rock':
      alchemist.roll.cleanliness -= 4
      alchemist.roll.wealth -= 2
      break
    case 'chiseled stone':
      alchemist.roll.cleanliness += 2
      alchemist.roll.wealth += 4
      break
    case 'marble':
      alchemist.roll.cleanliness += 5
      alchemist.roll.wealth += 6
      break
  }

  if (alchemist.roll.cleanliness > 80) {
    alchemist.roll.expertise += 10
    alchemist.roll.activity += 6
  } else if (alchemist.roll.cleanliness > 70) {
    alchemist.roll.expertise += 7
    alchemist.roll.activity += 4
  } else if (alchemist.roll.cleanliness > 60) {
    alchemist.roll.expertise += 3
    alchemist.roll.activity += 3
  } else if (alchemist.roll.cleanliness > 50) {
    alchemist.roll.expertise += 1
  } else if (alchemist.roll.cleanliness > 40) {
    alchemist.roll.expertise -= 1
  } else if (alchemist.roll.cleanliness > 30) {
    alchemist.roll.expertise -= 3
    alchemist.roll.activity -= 2
  } else if (alchemist.roll.cleanliness > 20) {
    alchemist.roll.expertise -= 5
    alchemist.roll.activity -= 6
  } else if (alchemist.roll.cleanliness <= 20) {
    alchemist.roll.expertise -= 7
    alchemist.roll.activity -= 10
  }

  if (alchemist.roll.wealth > 95) {
    alchemist.priceModifier += 4
    alchemist.roll.size += 3
    alchemist.roll.cleanliness += 15
    alchemist.roll.reputation += 10
  } else if (alchemist.roll.wealth > 80) {
    alchemist.priceModifier += 3
    alchemist.roll.cleanliness += 10
    alchemist.roll.reputation += 7
  } else if (alchemist.roll.wealth > 70) {
    alchemist.priceModifier += 2
    alchemist.roll.cleanliness += 6
    alchemist.roll.reputation += 4
  } else if (alchemist.roll.wealth > 60) {
    alchemist.priceModifier += 1
    alchemist.roll.activity += 5
    alchemist.roll.cleanliness += 4
  } else if (alchemist.roll.wealth > 50) {
    alchemist.roll.activity += 5
    alchemist.roll.reputation -= 5
    alchemist.roll.cleanliness += 2
  } else if (alchemist.roll.wealth > 30) {
    alchemist.priceModifier -= 1
    alchemist.roll.reputation -= 7
    alchemist.roll.cleanliness -= 15
  } else if (alchemist.roll.wealth <= 30) {
    alchemist.priceModifier -= 2
    alchemist.roll.reputation -= 10
    alchemist.roll.cleanliness -= 25
  }

  if (alchemist.roll.activity > 80) {
    alchemist.activity = 'extremely busy'
    alchemist.roll.reputation += 5
    alchemist.roll.cleanliness -= 5
  } else if (alchemist.roll.activity > 70) {
    alchemist.activity = 'very busy'
    alchemist.roll.reputation += 3
    alchemist.roll.cleanliness -= 3
  } else if (alchemist.roll.activity > 60) {
    alchemist.activity = 'rather busy'
    alchemist.roll.reputation += 2
    alchemist.roll.cleanliness -= 2
  } else if (alchemist.roll.activity > 50) {
    alchemist.activity = 'reasonably busy'
    alchemist.roll.reputation += 1
    alchemist.roll.cleanliness -= 1
  } else if (alchemist.roll.activity > 40) {
    alchemist.activity = 'not terribly busy'
    alchemist.roll.reputation -= 1
    alchemist.roll.cleanliness += 1
  } else if (alchemist.roll.activity > 30) {
    alchemist.activity = 'not busy'
    alchemist.roll.reputation -= 2
    alchemist.roll.cleanliness += 2
  } else if (alchemist.roll.activity > 20) {
    alchemist.activity = 'rather quiet'
    alchemist.roll.reputation -= 3
    alchemist.roll.cleanliness += 3
  } else if (alchemist.roll.activity <= 20) {
    alchemist.activity = 'very quiet'
    alchemist.roll.reputation -= 5
    alchemist.roll.cleanliness += 5
  }
}

function getSizeModifierForActivity (sizeRoll: number) {
  if (sizeRoll > 80) return -4
  if (sizeRoll > 70) return -3
  if (sizeRoll > 60) return -1
  if (sizeRoll > 30) return +1
  if (sizeRoll > 20) return +1
  return +3
}
