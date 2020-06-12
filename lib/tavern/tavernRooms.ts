import { random } from '../src/random'

interface Tavern {
  roll: {
    size: number
    population: number
  }
}

export function tavernRooms (tavern: Tavern) {
  return getBySize(tavern.roll.size) + populationModifier(tavern.roll.population)
}

function getBySize (roll: number) {
  if (roll > 80) return random(6, 10)
  if (roll > 60) return random(5, 9)
  if (roll > 40) return random(4, 8)
  if (roll > 20) return random(3, 6)
  return random(2, 4)
}

function populationModifier (roll: number) {
  if (roll > 80) return -3
  if (roll > 60) return -2
  if (roll > 40) return -1
  if (roll > 20) return 2
  return 3
}
