setup.tavernModifiers = function (town, tavern) {
  // if (['Silver', 'Golden', 'Glorious', 'Beautiful', 'Handsome', 'Lovely', 'Educated', 'Ornate', 'Wealthy', 'Cleanly', 'Jeweled', 'Superior', 'Flawless', 'Exquisite', 'Elegant', 'Fine'].includes(tavern.adjective)) {
  //   tavern.roll.wealth += 5
  // } else if (['Blighted', 'Withered', 'Lecherous', 'Faulty', 'Cracked', 'Common'].includes(tavern.adjective)) {
  //   tavern.roll.wealth -= 5
  // }

  if (town.roll.wealth > 95) {
    tavern.roll.wealth += 10
  } else if (town.roll.wealth > 80) {
    tavern.roll.wealth += 7
  } else if (town.roll.wealth > 70) {
    tavern.roll.wealth += 5
  } else if (town.roll.wealth > 60) {
    tavern.roll.wealth += 3
    tavern.roll.population += 1
  } else if (town.roll.wealth > 50) {
    tavern.roll.wealth += 1
    tavern.roll.population += 3
  } else if (town.roll.wealth > 40) {
    tavern.roll.wealth -= 1
    tavern.roll.population += 2
  } else if (town.roll.wealth > 30) {
    tavern.roll.wealth -= 2
  } else if (town.roll.wealth > 20) {
    tavern.roll.wealth -= 10
    tavern.roll.sin += 1
  } else if (town.roll.wealth <= 20) {
    tavern.roll.wealth -= 15
    tavern.roll.sin += 5
    tavern.roll.population -= 3
  }

  switch (tavern.type) {
    case 'brothel':
      tavern.roll.sin += 20
      tavern.roll.roughness += 4
      tavern.roll.cleanliness -= 5
      break
    case 'gambling den':
      tavern.roll.sin += 20
      tavern.roll.roughness += 4
      tavern.roll.cleanliness -= 5
      break
    case 'quiet and low-key bar':
      tavern.roll.sin -= 15
      tavern.roll.population -= 5
      tavern.roll.roughness -= 10
      tavern.roll.cleanliness += 3
      break
    case 'raucous dive':
      tavern.roll.sin += 5
      tavern.roll.population += 15
      tavern.roll.roughness += 5
      tavern.roll.cleanliness -= 5
      break
    case "thieves' guild hangout":
      tavern.roll.sin += 15
      tavern.roll.roughness += 5
      break
    case 'high-end dining club':
      tavern.roll.sin -= 10
      tavern.roll.wealth += 5
      tavern.roll.roughness -= 10
      tavern.roll.cleanliness += 10
      break
    case 'members-only club':
      tavern.roll.sin -= 10
      tavern.roll.wealth += 5
      tavern.roll.roughness -= 10
      tavern.roll.cleanliness += 10
      break

    case 'gathering place for a secret society':
      tavern.roll.sin += 5
      tavern.roll.population -= 5
      break
  }
  /* ------------------------- DRAW -------------------------- */
  switch (tavern.draw) {
    case 'attractive waitstaff':
      tavern.roll.roughness += 3
      tavern.roll.sin += 1
      break
    case 'crude jokes the bartender makes':
      tavern.roll.roughness += 3
      tavern.roll.sin += 1
      break
    case "proximity to the thieves' guild headquarters":
      tavern.roll.roughness += 1
      tavern.roll.sin += 3
      break
    case 'proximity to the brothel':
      tavern.roll.roughness += 1
      tavern.roll.sin += 3
      break
    case 'witty banter with the waitstaff':
      tavern.roll.roughness -= 1
      tavern.roll.sin -= 3
      tavern.roll.cleanliness += 1
      break
    case 'incredible view':
      tavern.roll.roughness -= 1
      tavern.roll.sin -= 3
      tavern.roll.cleanliness += 1
      break
    case 'nice view':
      tavern.roll.roughness -= 1
      tavern.roll.sin -= 3
      tavern.roll.cleanliness += 1
      break
    case 'proximity to the church':
      tavern.roll.roughness -= 1
      tavern.roll.sin -= 3
      tavern.roll.cleanliness += 1
      break
    case 'warmth inside':
      tavern.roll.roughness -= 2
      tavern.roll.sin -= 1
      tavern.roll.cleanliness += 1
      break
    case 'huge fireplace':
      tavern.roll.roughness -= 2
      tavern.roll.sin -= 1
      tavern.roll.cleanliness += 1
      break
    case 'lack of bedbugs':
      tavern.roll.roughness -= 4
      tavern.roll.sin -= 1
      tavern.roll.cleanliness += 15
      break
    case 'clean beds':
      tavern.roll.roughness -= 4
      tavern.roll.sin -= 1
      tavern.roll.cleanliness += 15
      /* tavern.lodging *= 1.1 */
      break
  }

  /* ---------------------- TAVERN STRUCTURE MATERIAL ----------------------- */

  switch (tavern.material) {
    case 'hewn rock':
      tavern.roll.roughness += 3
      break
    case 'chiseled stone':
      tavern.roll.roughness -= 1
      break
    case 'marble':
      tavern.roll.cleanliness += 5
      tavern.roll.wealth += 6
      break
  }

  /* ======================= RENDERS ======================= */
  /* ------------------------- WEALTH -------------------------- */

  if (tavern.roll.wealth > 95) {
    tavern.priceModifier += 4
    tavern.roll.size += 3
    tavern.roll.cleanliness += 15
    tavern.roll.roughness -= 10
  } else if (tavern.roll.wealth > 80) {
    tavern.priceModifier += 3
    tavern.roll.cleanliness += 10
  } else if (tavern.roll.wealth > 70) {
    tavern.priceModifier += 2
    tavern.roll.cleanliness += 6
  } else if (tavern.roll.wealth > 60) {
    tavern.priceModifier += 1
    tavern.roll.population += 5
    tavern.roll.cleanliness += 4
  } else if (tavern.roll.wealth > 50) {
    tavern.roll.population += 5
    tavern.roll.reputation -= 5
    tavern.roll.cleanliness += 2
  } else if (tavern.roll.wealth > 30) {
    tavern.priceModifier -= 1
    tavern.roll.reputation -= 7
    tavern.roll.cleanliness -= 15
  } else if (tavern.roll.wealth <= 30) {
    tavern.priceModifier -= 2
    tavern.roll.reputation -= 10
    tavern.roll.cleanliness -= 25
  }

  /* ------------------------- SIZE -------------------------- */

  if (tavern.roll.size > 80) {
    tavern.roll.population += 5
    tavern.roll.roughness += 3
    tavern.roll.cleanliness -= 2
  } else if (tavern.roll.size > 60) {
    tavern.roll.population += 4
    tavern.roll.roughness += 1
  } else if (tavern.roll.size > 40) {
    tavern.roll.population += 3
  } else if (tavern.roll.size > 20) {
    tavern.roll.population -= 2
    tavern.roll.sin -= 5
  } else if (tavern.roll.size <= 20) {
    tavern.roll.sin -= 5
    tavern.roll.population -= 5
    tavern.roll.roughness -= 3
  }

  /* ------------------------- ROUGHNESS -------------------------- */

  if (tavern.roll.roughness > 80) {
    tavern.roll.population += 3
    tavern.roll.sin += 5
    tavern.roll.cleanliness -= 4
  } else if (tavern.roll.roughness > 60) {
    tavern.roll.population += 1
    tavern.roll.sin += 3
    tavern.roll.cleanliness -= 2
  } else if (tavern.roll.roughness > 50) {
    tavern.roll.population += 1
    tavern.roll.sin -= 1
  } else if (tavern.roll.roughness > 40) {
    tavern.roll.population += 2
    tavern.roll.sin -= 3
  } else if (tavern.roll.roughness > 30) {
    tavern.roll.population -= 5
    tavern.roll.sin -= 1
    tavern.roll.wealth += 1
  } else if (tavern.roll.roughness > 20) {
    tavern.roll.population -= 10
    tavern.roll.sin -= 3
    tavern.roll.wealth -= 1
  } else if (tavern.roll.roughness <= 20) {
    tavern.roll.population -= 15
    tavern.roll.sin -= 5
    tavern.roll.wealth -= 3
  }

  if (tavern.roll.cleanliness > 80) {
    tavern.roll.wealth += 3
    tavern.roll.roughness -= 3
  } else if (tavern.roll.cleanliness > 70) {
    tavern.roll.wealth += 2
    tavern.roll.roughness -= 3
  } else if (tavern.roll.cleanliness > 60) {
    tavern.roll.wealth += 1
    tavern.roll.roughness -= 2
  } else if (tavern.roll.cleanliness > 50) {
    tavern.roll.roughness -= 2
  } else if (tavern.roll.cleanliness > 40) {
    tavern.roll.roughness -= 1
  } else if (tavern.roll.cleanliness > 30) {
    tavern.roll.population -= 1
    tavern.roll.sin += 1
    tavern.roll.wealth -= 2
  } else if (tavern.roll.cleanliness > 20) {
    tavern.roll.population -= 2
    tavern.roll.sin += 3
    tavern.roll.wealth -= 4
  } else if (tavern.roll.cleanliness <= 20) {
    tavern.roll.population -= 3
    tavern.roll.sin += 5
    tavern.roll.wealth -= 8
  }

  return tavern
}
