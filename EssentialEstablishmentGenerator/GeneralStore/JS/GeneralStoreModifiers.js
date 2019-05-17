setup.GeneralStoreModifiers = function (town, GeneralStore) {
  if (town.roll.wealth > 95) {
    GeneralStore.roll.wealth += 5
  } else if (town.roll.wealth > 80) {
    GeneralStore.roll.wealth += 3
  } else if (town.roll.wealth > 70) {
    GeneralStore.roll.wealth += 2
  } else if (town.roll.wealth > 60) {
    GeneralStore.roll.wealth += 1
    GeneralStore.roll.population += 1
  } else if (town.roll.wealth > 50) {
    GeneralStore.roll.wealth += 1
    GeneralStore.roll.population += 3
  } else if (town.roll.wealth > 40) {
    GeneralStore.roll.wealth -= 1
    GeneralStore.roll.population += 2
  } else if (town.roll.wealth > 30) {
    GeneralStore.roll.wealth -= 2
  } else if (town.roll.wealth > 20) {
    GeneralStore.roll.wealth -= 3
    GeneralStore.roll.sin += 1
  } else if (town.roll.wealth <= 20) {
    GeneralStore.roll.wealth -= 5
    GeneralStore.roll.sin += 3
    GeneralStore.roll.population -= 3
  }

  if (GeneralStore.roll.wealth > 95) {
    GeneralStore.priceModifier += 4
    GeneralStore.roll.size += 3
    GeneralStore.roll.cleanliness += 15
    GeneralStore.roll.roughness -= 10
  } else if (GeneralStore.roll.wealth > 80) {
    GeneralStore.priceModifier += 3
    GeneralStore.roll.cleanliness += 10
  } else if (GeneralStore.roll.wealth > 70) {
    GeneralStore.priceModifier += 2
    GeneralStore.roll.cleanliness += 6
  } else if (GeneralStore.roll.wealth > 60) {
    GeneralStore.priceModifier += 1
    GeneralStore.roll.population += 5
    GeneralStore.roll.cleanliness += 4
  } else if (GeneralStore.roll.wealth > 50) {
    GeneralStore.roll.population += 5
    GeneralStore.roll.reputation -= 5
    GeneralStore.roll.cleanliness += 2
  } else if (GeneralStore.roll.wealth > 30) {
    GeneralStore.priceModifier -= 1
    GeneralStore.roll.reputation -= 7
    GeneralStore.roll.cleanliness -= 15
  } else if (GeneralStore.roll.wealth <= 30) {
    GeneralStore.priceModifier -= 2
    GeneralStore.roll.reputation -= 10
    GeneralStore.roll.cleanliness -= 25
  }

  if (GeneralStore.roll.cleanliness > 80) {
    GeneralStore.roll.wealth += 3
    GeneralStore.roll.roughness -= 3
  } else if (GeneralStore.roll.cleanliness > 70) {
    GeneralStore.roll.wealth += 2
    GeneralStore.roll.roughness -= 3
  } else if (GeneralStore.roll.cleanliness > 60) {
    GeneralStore.roll.wealth += 1
    GeneralStore.roll.roughness -= 2
  } else if (GeneralStore.roll.cleanliness > 50) {
    GeneralStore.roll.roughness -= 2
  } else if (GeneralStore.roll.cleanliness > 40) {
    GeneralStore.roll.roughness -= 1
  } else if (GeneralStore.roll.cleanliness > 30) {
    GeneralStore.roll.population -= 1
    GeneralStore.roll.sin += 1
    GeneralStore.roll.wealth -= 2
  } else if (GeneralStore.roll.cleanliness > 20) {
    GeneralStore.roll.population -= 2
    GeneralStore.roll.sin += 3
    GeneralStore.roll.wealth -= 4
  } else if (GeneralStore.roll.cleanliness <= 20) {
    GeneralStore.roll.population -= 3
    GeneralStore.roll.sin += 5
    GeneralStore.roll.wealth -= 8
  }

  return GeneralStore
}
