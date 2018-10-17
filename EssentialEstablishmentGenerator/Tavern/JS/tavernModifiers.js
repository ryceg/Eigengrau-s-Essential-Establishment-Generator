setup.tavernModifiers = function (town, tavern) {
  // if (['Silver', 'Golden', 'Glorious', 'Beautiful', 'Handsome', 'Lovely', 'Educated', 'Ornate', 'Wealthy', 'Cleanly', 'Jeweled', 'Superior', 'Flawless', 'Exquisite', 'Elegant', 'Fine'].includes(tavern.adjective)) {
  //   tavern.wealthRoll += 5
  // } else if (['Blighted', 'Withered', 'Lecherous', 'Faulty', 'Cracked', 'Common'].includes(tavern.adjective)) {
  //   tavern.wealthRoll -= 5
  // }

  switch (tavern.wealth) {
    case 'kingly':
      tavern.lodging = 800
      tavern.food = 400
      break
    case 'aristocratic':
      tavern.lodging = 400
      tavern.food = 200
      break
    case 'wealthy':
      tavern.lodging = 200
      tavern.food = 80
      break
    case 'comfortable':
      tavern.lodging = 50
      tavern.food = 40
      break
    case 'modest':
      tavern.lodging = 30
      tavern.food = 30
      break
    case 'poor':
      tavern.lodging = 10
      tavern.food = 6
      break
    case 'squalid':
      tavern.lodging = 7
      tavern.food = 3
      break
    default:
      tavern.lodging = 30
      tavern.food = 30
  }

  if (town.wealthRoll > 95) {
    tavern.wealthRoll += 5
  } else if (town.wealthRoll > 80) {
    tavern.wealthRoll += 3
  } else if (town.wealthRoll > 70) {
    tavern.wealthRoll += 2
  } else if (town.wealthRoll > 60) {
    tavern.wealthRoll += 1
    tavern.populationRoll += 1
  } else if (town.wealthRoll > 50) {
    tavern.wealthRoll += 1
    tavern.populationRoll += 3
  } else if (town.wealthRoll > 40) {
    tavern.wealthRoll -= 1
    tavern.populationRoll += 2
  } else if (town.wealthRoll > 30) {
    tavern.wealthRoll -= 2
  } else if (town.wealthRoll > 20) {
    tavern.wealthRoll -= 3
    tavern.sinRoll += 1
  } else if (town.wealthRoll <= 20) {
    tavern.wealthRoll -= 5
    tavern.sinRoll += 3
    tavern.populationRoll -= 3
  }

  switch (tavern.type) {
    case 'brothel':
      tavern.sinRoll += 20
      tavern.roughnessRoll += 4
      tavern.cleanlinessRoll -= 5
      /* tavern.lodging *= 1.3 */
      break
    case 'gambling den':
      tavern.sinRoll += 20
      tavern.roughnessRoll += 4
      tavern.cleanlinessRoll -= 5
      /* tavern.lodging *= 1.3 */
      break
    case 'quiet and low-key bar':
      tavern.sinRoll -= 15
      tavern.populationRoll -= 5
      tavern.roughnessRoll -= 10
      tavern.cleanlinessRoll += 3
      break
    case 'raucous dive':
      tavern.sinRoll += 5
      tavern.populationRoll += 15
      tavern.roughnessRoll += 5
      tavern.cleanlinessRoll -= 5
      break
    case "thieves' guild hangout":
      tavern.sinRoll += 15
      tavern.roughnessRoll += 5
      break
    case 'high-end dining club':
      tavern.sinRoll -= 10
      tavern.wealthRoll += 5
      tavern.roughnessRoll -= 10
      tavern.cleanlinessRoll += 10
      tavern.food *= 1.3
      break
    case 'members-only club':
      tavern.sinRoll -= 10
      tavern.wealthRoll += 5
      tavern.roughnessRoll -= 10
      tavern.cleanlinessRoll += 10
      /* tavern.food *= 1.3 */
      break

    case 'gathering place for a secret society':
      tavern.sinRoll += 5
      tavern.populationRoll -= 5
      break
  }
  /* ------------------------- DRAW -------------------------- */
  switch (tavern.draw) {
    case 'attractive waitstaff':
      tavern.roughnessRoll += 3
      tavern.sinRoll += 1
      break
    case 'crude jokes the bartender makes':
      tavern.roughnessRoll += 3
      tavern.sinRoll += 1
      break
    case "proximity to the thieves' guild headquarters":
      tavern.roughnessRoll += 1
      tavern.sinRoll += 3
      break
    case 'proximity to the brothel':
      tavern.roughnessRoll += 1
      tavern.sinRoll += 3
      break
    case 'witty banter with the waitstaff':
      tavern.roughnessRoll -= 1
      tavern.sinRoll -= 3
      tavern.cleanlinessRoll += 1
      break
    case 'incredible view':
      tavern.roughnessRoll -= 1
      tavern.sinRoll -= 3
      tavern.cleanlinessRoll += 1
      break
    case 'nice view':
      tavern.roughnessRoll -= 1
      tavern.sinRoll -= 3
      tavern.cleanlinessRoll += 1
      break
    case 'proximity to the church':
      tavern.roughnessRoll -= 1
      tavern.sinRoll -= 3
      tavern.cleanlinessRoll += 1
      break
    case 'warmth inside':
      tavern.roughnessRoll -= 2
      tavern.sinRoll -= 1
      tavern.cleanlinessRoll += 1
      break
    case 'huge fireplace':
      tavern.roughnessRoll -= 2
      tavern.sinRoll -= 1
      tavern.cleanlinessRoll += 1
      break
    case 'lack of bedbugs':
      tavern.roughnessRoll -= 4
      tavern.sinRoll -= 1
      tavern.cleanlinessRoll += 15
      break
    case 'clean beds':
      tavern.roughnessRoll -= 4
      tavern.sinRoll -= 1
      tavern.cleanlinessRoll += 15
      /* tavern.lodging *= 1.1 */
      break
  }

  /* ---------------------- TAVERN STRUCTURE MATERIAL ----------------------- */

  switch (tavern.material) {
    case 'hewn rock':
      tavern.roughnessRoll += 3
      break
    case 'chiseled stone':
      tavern.roughnessRoll -= 1
      break
    case 'marble':
      tavern.cleanlinessRoll += 5
      tavern.wealthRoll += 6
      break
  }

  /* ======================= RENDERS ======================= */
  /* ------------------------- WEALTH -------------------------- */

  if (tavern.wealthRoll > 95) {
    tavern.priceModifier += 4
    tavern.sizeRoll += 3
    tavern.cleanlinessRoll += 15
    tavern.roughnessRoll -= 10
  } else if (tavern.wealthRoll > 80) {
    tavern.priceModifier += 3
    tavern.cleanlinessRoll += 10
  } else if (tavern.wealthRoll > 70) {
    tavern.priceModifier += 2
    tavern.cleanlinessRoll += 6
  } else if (tavern.wealthRoll > 60) {
    tavern.priceModifier += 1
    tavern.populationRoll += 5
    tavern.cleanlinessRoll += 4
  } else if (tavern.wealthRoll > 50) {
    tavern.populationRoll += 5
    tavern.reputationRoll -= 5
    tavern.cleanlinessRoll += 2
  } else if (tavern.wealthRoll > 30) {
    tavern.priceModifier -= 1
    tavern.reputationRoll -= 7
    tavern.cleanlinessRoll -= 15
  } else if (tavern.wealthRoll <= 30) {
    tavern.priceModifier -= 2
    tavern.reputationRoll -= 10
    tavern.cleanlinessRoll -= 25
  }

  /* ------------------------- SIZE -------------------------- */

  if (tavern.sizeRoll > 80) {
    tavern.populationRoll += 5
    tavern.roughnessRoll += 3
    tavern.cleanlinessRoll -= 2
  } else if (tavern.sizeRoll > 60) {
    tavern.populationRoll += 4
    tavern.roughnessRoll += 1
  } else if (tavern.sizeRoll > 40) {
    tavern.populationRoll += 3
  } else if (tavern.sizeRoll > 20) {
    tavern.populationRoll -= 2
    tavern.sinRoll -= 5
  } else if (tavern.sizeRoll <= 20) {
    tavern.sinRoll -= 5
    tavern.populationRoll -= 5
    tavern.roughnessRoll -= 3
  }

  /* ------------------------- ROUGHNESS -------------------------- */

  if (tavern.roughnessRoll > 80) {
    tavern.populationRoll += 3
    tavern.sinRoll += 5
    tavern.cleanlinessRoll -= 4
  } else if (tavern.roughnessRoll > 60) {
    tavern.populationRoll += 1
    tavern.sinRoll += 3
    tavern.cleanlinessRoll -= 2
  } else if (tavern.roughnessRoll > 50) {
    tavern.populationRoll += 1
    tavern.sinRoll -= 1
  } else if (tavern.roughnessRoll > 40) {
    tavern.populationRoll += 2
    tavern.sinRoll -= 3
  } else if (tavern.roughnessRoll > 30) {
    tavern.populationRoll -= 5
    tavern.sinRoll -= 1
    tavern.wealthRoll += 1
  } else if (tavern.roughnessRoll > 20) {
    tavern.populationRoll -= 10
    tavern.sinRoll -= 3
    tavern.wealthRoll -= 1
  } else if (tavern.roughnessRoll <= 20) {
    tavern.populationRoll -= 15
    tavern.sinRoll -= 5
    tavern.wealthRoll -= 3
  }

  if (tavern.cleanlinessRoll > 80) {
    tavern.wealthRoll += 3
    tavern.roughnessRoll -= 3
  } else if (tavern.cleanlinessRoll > 70) {
    tavern.wealthRoll += 2
    tavern.roughnessRoll -= 3
  } else if (tavern.cleanlinessRoll > 60) {
    tavern.wealthRoll += 1
    tavern.roughnessRoll -= 2
  } else if (tavern.cleanlinessRoll > 50) {
    tavern.roughnessRoll -= 2
  } else if (tavern.cleanlinessRoll > 40) {
    tavern.roughnessRoll -= 1
  } else if (tavern.cleanlinessRoll > 30) {
    tavern.populationRoll -= 1
    tavern.sinRoll += 1
    tavern.wealthRoll -= 2
  } else if (tavern.cleanlinessRoll > 20) {
    tavern.populationRoll -= 2
    tavern.sinRoll += 3
    tavern.wealthRoll -= 4
  } else if (tavern.cleanlinessRoll <= 20) {
    tavern.populationRoll -= 3
    tavern.sinRoll += 5
    tavern.wealthRoll -= 8
  }

  return tavern
}
