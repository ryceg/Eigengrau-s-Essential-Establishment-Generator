setup.GeneralStoreModifiers = function (town, GeneralStore) {

  if (town.wealthRoll > 95) {
    GeneralStore.wealthRoll += 5
  } else if (town.wealthRoll > 80) {
    GeneralStore.wealthRoll += 3
  } else if (town.wealthRoll > 70) {
    GeneralStore.wealthRoll += 2
  } else if (town.wealthRoll > 60) {
    GeneralStore.wealthRoll += 1
    GeneralStore.populationRoll += 1
  } else if (town.wealthRoll > 50) {
    GeneralStore.wealthRoll += 1
    GeneralStore.populationRoll += 3
  } else if (town.wealthRoll > 40) {
    GeneralStore.wealthRoll -= 1
    GeneralStore.populationRoll += 2
  } else if (town.wealthRoll > 30) {
    GeneralStore.wealthRoll -= 2
  } else if (town.wealthRoll > 20) {
    GeneralStore.wealthRoll -= 3
    GeneralStore.sinRoll += 1
  } else if (town.wealthRoll <= 20) {
    GeneralStore.wealthRoll -= 5
    GeneralStore.sinRoll += 3
    GeneralStore.populationRoll -= 3
  }

  if (GeneralStore.wealthRoll > 95) {
    GeneralStore.priceModifier += 4
    GeneralStore.sizeRoll += 3
    GeneralStore.cleanlinessRoll += 15
    GeneralStore.roughnessRoll -= 10
  } else if (GeneralStore.wealthRoll > 80) {
    GeneralStore.priceModifier += 3
    GeneralStore.cleanlinessRoll += 10
  } else if (GeneralStore.wealthRoll > 70) {
    GeneralStore.priceModifier += 2
    GeneralStore.cleanlinessRoll += 6
  } else if (GeneralStore.wealthRoll > 60) {
    GeneralStore.priceModifier += 1
    GeneralStore.populationRoll += 5
    GeneralStore.cleanlinessRoll += 4
  } else if (GeneralStore.wealthRoll > 50) {
    GeneralStore.populationRoll += 5
    GeneralStore.reputationRoll -= 5
    GeneralStore.cleanlinessRoll += 2
  } else if (GeneralStore.wealthRoll > 30) {
    GeneralStore.priceModifier -= 1
    GeneralStore.reputationRoll -= 7
    GeneralStore.cleanlinessRoll -= 15
  } else if (GeneralStore.wealthRoll <= 30) {
    GeneralStore.priceModifier -= 2
    GeneralStore.reputationRoll -= 10
    GeneralStore.cleanlinessRoll -= 25
  }

  if (GeneralStore.cleanlinessRoll > 80) {
    GeneralStore.wealthRoll += 3
    GeneralStore.roughnessRoll -= 3
  } else if (GeneralStore.cleanlinessRoll > 70) {
    GeneralStore.wealthRoll += 2
    GeneralStore.roughnessRoll -= 3
  } else if (GeneralStore.cleanlinessRoll > 60) {
    GeneralStore.wealthRoll += 1
    GeneralStore.roughnessRoll -= 2
  } else if (GeneralStore.cleanlinessRoll > 50) {
    GeneralStore.roughnessRoll -= 2
  } else if (GeneralStore.cleanlinessRoll > 40) {
    GeneralStore.roughnessRoll -= 1
  } else if (GeneralStore.cleanlinessRoll > 30) {
    GeneralStore.populationRoll -= 1
    GeneralStore.sinRoll += 1
    GeneralStore.wealthRoll -= 2
  } else if (GeneralStore.cleanlinessRoll > 20) {
    GeneralStore.populationRoll -= 2
    GeneralStore.sinRoll += 3
    GeneralStore.wealthRoll -= 4
  } else if (GeneralStore.cleanlinessRoll <= 20) {
    GeneralStore.populationRoll -= 3
    GeneralStore.sinRoll += 5
    GeneralStore.wealthRoll -= 8
  }

  return GeneralStore
}
