/* global setup */
setup.alchemistModifiers = function (alchemist) {
  if (alchemist.sizeRoll > 80) {
    alchemist.activityRoll -= 4
  } else if (alchemist.sizeRoll > 70) {
    alchemist.activityRoll -= 3
  } else if (alchemist.sizeRoll > 60) {
    alchemist.activityRoll -= 1
  } else if (alchemist.sizeRoll > 30) {
    alchemist.activityRoll += 1
  } else if (alchemist.sizeRoll > 20) {
    alchemist.activityRoll += 1
  } else if (alchemist.sizeRoll <= 20) {
    alchemist.activityRoll += 3
  }

  switch (alchemist.material) {
    case 'hewn rock':
      alchemist.roughnessRoll += 3
      break
    case 'chiseled stone':
      alchemist.roughnessRoll -= 1
      break
    case 'marble':
      alchemist.cleanlinessRoll += 5
      alchemist.wealthRoll += 6
      break
  }

  if (alchemist.cleanlinessRoll > 80) {
    alchemist.expertiseRoll += 10
    alchemist.activityRoll += 6
    alchemist.hardinessRoll += 8
  } else if (alchemist.cleanlinessRoll > 70) {
    alchemist.expertiseRoll += 7
    alchemist.activityRoll += 4
    alchemist.hardinessRoll += 6
  } else if (alchemist.cleanlinessRoll > 60) {
    alchemist.expertiseRoll += 3
    alchemist.activityRoll += 3
    alchemist.hardinessRoll += 4
  } else if (alchemist.cleanlinessRoll > 50) {
    alchemist.expertiseRoll += 1
    alchemist.hardinessRoll += 2
  } else if (alchemist.cleanlinessRoll > 40) {
    alchemist.expertiseRoll -= 1
    alchemist.hardinessRoll -= 2
  } else if (alchemist.cleanlinessRoll > 30) {
    alchemist.expertiseRoll -= 3
    alchemist.hardinessRoll -= 4
    alchemist.activityRoll -= 2
  } else if (alchemist.cleanlinessRoll > 20) {
    alchemist.expertiseRoll -= 5
    alchemist.hardinessRoll -= 6
    alchemist.activityRoll -= 6
  } else if (alchemist.cleanlinessRoll <= 20) {
    alchemist.expertiseRoll -= 7
    alchemist.hardinessRoll -= 8
    alchemist.activityRoll -= 10
  }

  if (alchemist.wealthRoll > 95) {
    alchemist.priceModifier += 4
    alchemist.sizeRoll += 3
    alchemist.cleanlinessRoll += 15
    alchemist.reputationRoll += 10
  } else if (alchemist.wealthRoll > 80) {
    alchemist.priceModifier += 3
    alchemist.cleanlinessRoll += 10
    alchemist.reputationRoll += 7
  } else if (alchemist.wealthRoll > 70) {
    alchemist.priceModifier += 2
    alchemist.cleanlinessRoll += 6
    alchemist.reputationRoll += 4
  } else if (alchemist.wealthRoll > 60) {
    alchemist.priceModifier += 1
    alchemist.populationRoll += 5
    alchemist.cleanlinessRoll += 4
  } else if (alchemist.wealthRoll > 50) {
    alchemist.populationRoll += 5
    alchemist.reputationRoll -= 5
    alchemist.cleanlinessRoll += 2
  } else if (alchemist.wealthRoll > 30) {
    alchemist.priceModifier -= 1
    alchemist.reputationRoll -= 7
    alchemist.cleanlinessRoll -= 15
  } else if (alchemist.wealthRoll <= 30) {
    alchemist.priceModifier -= 2
    alchemist.reputationRoll -= 10
    alchemist.cleanlinessRoll -= 25
  }

  if (alchemist.activityRoll > 80) {
    alchemist.activity = 'extremely busy'
    alchemist.reputationRoll += 5
    alchemist.cleanlinessRoll -= 5
  } else if (alchemist.activityRoll > 70) {
    alchemist.activity = 'very busy'
    alchemist.reputationRoll += 3
    alchemist.cleanlinessRoll -= 3
  } else if (alchemist.activityRoll > 60) {
    alchemist.activity = 'rather busy'
    alchemist.reputationRoll += 2
    alchemist.cleanlinessRoll -= 2
  } else if (alchemist.activityRoll > 50) {
    alchemist.activity = 'reasonably busy'
    alchemist.reputationRoll += 1
    alchemist.cleanlinessRoll -= 1
  } else if (alchemist.activityRoll > 40) {
    alchemist.activity = 'not terribly busy'
    alchemist.reputationRoll -= 1
    alchemist.cleanlinessRoll += 1
  } else if (alchemist.activityRoll > 30) {
    alchemist.activity = 'not busy'
    alchemist.reputationRoll -= 2
    alchemist.cleanlinessRoll += 2
  } else if (alchemist.activityRoll > 20) {
    alchemist.activity = 'rather quiet'
    alchemist.reputationRoll -= 3
    alchemist.cleanlinessRoll += 3
  } else if (alchemist.activityRoll <= 20) {
    alchemist.activity = 'very quiet'
    alchemist.reputationRoll -= 5
    alchemist.cleanlinessRoll += 5
  }

  return alchemist
}
