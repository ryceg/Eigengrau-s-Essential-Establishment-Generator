setup.generalStoreModifiers = function (town, generalStore) {
  if (town.roll.wealth > 95) {
    generalStore.roll.wealth += 5
  } else if (town.roll.wealth > 80) {
    generalStore.roll.wealth += 3
  } else if (town.roll.wealth > 70) {
    generalStore.roll.wealth += 2
  } else if (town.roll.wealth > 60) {
    generalStore.roll.wealth += 1
    generalStore.roll.population += 1
  } else if (town.roll.wealth > 50) {
    generalStore.roll.wealth += 1
    generalStore.roll.population += 3
  } else if (town.roll.wealth > 40) {
    generalStore.roll.wealth -= 1
    generalStore.roll.population += 2
  } else if (town.roll.wealth > 30) {
    generalStore.roll.wealth -= 2
  } else if (town.roll.wealth > 20) {
    generalStore.roll.wealth -= 3
    generalStore.roll.sin += 1
  } else if (town.roll.wealth <= 20) {
    generalStore.roll.wealth -= 5
    generalStore.roll.sin += 3
    generalStore.roll.population -= 3
  }

  if (generalStore.roll.wealth > 95) {
    generalStore.priceModifier += 4
    generalStore.roll.size += 3
    generalStore.roll.cleanliness += 15
    generalStore.roll.roughness -= 10
  } else if (generalStore.roll.wealth > 80) {
    generalStore.priceModifier += 3
    generalStore.roll.cleanliness += 10
  } else if (generalStore.roll.wealth > 70) {
    generalStore.priceModifier += 2
    generalStore.roll.cleanliness += 6
  } else if (generalStore.roll.wealth > 60) {
    generalStore.priceModifier += 1
    generalStore.roll.population += 5
    generalStore.roll.cleanliness += 4
  } else if (generalStore.roll.wealth > 50) {
    generalStore.roll.population += 5
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
    generalStore.roll.roughness -= 3
  } else if (generalStore.roll.cleanliness > 70) {
    generalStore.roll.wealth += 2
    generalStore.roll.roughness -= 3
  } else if (generalStore.roll.cleanliness > 60) {
    generalStore.roll.wealth += 1
    generalStore.roll.roughness -= 2
  } else if (generalStore.roll.cleanliness > 50) {
    generalStore.roll.roughness -= 2
  } else if (generalStore.roll.cleanliness > 40) {
    generalStore.roll.roughness -= 1
  } else if (generalStore.roll.cleanliness > 30) {
    generalStore.roll.population -= 1
    generalStore.roll.sin += 1
    generalStore.roll.wealth -= 2
  } else if (generalStore.roll.cleanliness > 20) {
    generalStore.roll.population -= 2
    generalStore.roll.sin += 3
    generalStore.roll.wealth -= 4
  } else if (generalStore.roll.cleanliness <= 20) {
    generalStore.roll.population -= 3
    generalStore.roll.sin += 5
    generalStore.roll.wealth -= 8
  }

  return generalStore
}
