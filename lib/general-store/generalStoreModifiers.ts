import { Town } from '../town/_common'
import { GeneralStore } from './_common'

export function generalStoreModifiers (town: Town, generalStore: GeneralStore): void {
  if (town.roll.wealth > 95) {
    generalStore.roll.wealth += 5
  } else if (town.roll.wealth > 80) {
    generalStore.roll.wealth += 3
  } else if (town.roll.wealth > 70) {
    generalStore.roll.wealth += 2
  } else if (town.roll.wealth > 60) {
    generalStore.roll.wealth += 1
    generalStore.roll.activity += 1
  } else if (town.roll.wealth > 50) {
    generalStore.roll.wealth += 1
    generalStore.roll.activity += 3
  } else if (town.roll.wealth > 40) {
    generalStore.roll.wealth -= 1
    generalStore.roll.activity += 2
  } else if (town.roll.wealth > 30) {
    generalStore.roll.wealth -= 2
  } else if (town.roll.wealth > 20) {
    generalStore.roll.wealth -= 3
    generalStore.roll.sin += 1
  } else if (town.roll.wealth <= 20) {
    generalStore.roll.wealth -= 5
    generalStore.roll.sin += 3
    generalStore.roll.activity -= 3
  }

  if (generalStore.roll.wealth > 95) {
    generalStore.priceModifier += 4
    generalStore.roll.size += 3
    generalStore.roll.cleanliness += 15
    generalStore.roll.reputation += 10
  } else if (generalStore.roll.wealth > 80) {
    generalStore.priceModifier += 3
    generalStore.roll.cleanliness += 10
  } else if (generalStore.roll.wealth > 70) {
    generalStore.priceModifier += 2
    generalStore.roll.cleanliness += 6
  } else if (generalStore.roll.wealth > 60) {
    generalStore.priceModifier += 1
    generalStore.roll.activity += 5
    generalStore.roll.cleanliness += 4
  } else if (generalStore.roll.wealth > 50) {
    generalStore.roll.activity += 5
    generalStore.roll.reputation -= 5
    generalStore.roll.cleanliness += 2
  } else if (generalStore.roll.wealth > 30) {
    generalStore.priceModifier -= 1
    generalStore.roll.reputation -= 7
    generalStore.roll.cleanliness -= 15
  } else if (generalStore.roll.wealth <= 30) {
    generalStore.priceModifier -= 2
    generalStore.roll.reputation -= 10
    generalStore.roll.cleanliness -= 25
  }

  if (generalStore.roll.cleanliness > 80) {
    generalStore.roll.wealth += 3
    generalStore.roll.reputation += 3
  } else if (generalStore.roll.cleanliness > 70) {
    generalStore.roll.wealth += 2
    generalStore.roll.reputation += 3
  } else if (generalStore.roll.cleanliness > 60) {
    generalStore.roll.wealth += 1
    generalStore.roll.reputation += 2
  } else if (generalStore.roll.cleanliness > 50) {
    generalStore.roll.reputation += 2
  } else if (generalStore.roll.cleanliness > 40) {
    generalStore.roll.reputation += 1
  } else if (generalStore.roll.cleanliness > 30) {
    generalStore.roll.activity -= 1
    generalStore.roll.sin += 1
    generalStore.roll.wealth -= 2
  } else if (generalStore.roll.cleanliness > 20) {
    generalStore.roll.activity -= 2
    generalStore.roll.sin += 3
    generalStore.roll.wealth -= 4
  } else if (generalStore.roll.cleanliness <= 20) {
    generalStore.roll.activity -= 3
    generalStore.roll.sin += 5
    generalStore.roll.wealth -= 8
  }
}
