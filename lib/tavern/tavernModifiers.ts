import { Town } from '../town/_common'
import { Tavern } from './_common'

export function tavernModifiers (town: Town, tavern: Tavern) {
  const townRoll = town.roll
  const tavernRoll = tavern.roll

  if (townRoll.wealth > 95) {
    tavernRoll.wealth += 10
  } else if (townRoll.wealth > 80) {
    tavernRoll.wealth += 7
  } else if (townRoll.wealth > 70) {
    tavernRoll.wealth += 5
  } else if (townRoll.wealth > 60) {
    tavernRoll.wealth += 3
    tavernRoll.activity += 1
  } else if (townRoll.wealth > 50) {
    tavernRoll.wealth += 1
    tavernRoll.activity += 3
  } else if (townRoll.wealth > 40) {
    tavernRoll.wealth -= 1
    tavernRoll.activity += 2
  } else if (townRoll.wealth > 30) {
    tavernRoll.wealth -= 2
  } else if (townRoll.wealth > 20) {
    tavernRoll.wealth -= 10
    tavernRoll.sin += 1
  } else if (townRoll.wealth <= 20) {
    tavernRoll.wealth -= 15
    tavernRoll.sin += 5
    tavernRoll.activity -= 3
  }

  switch (tavern.tavernType) {
    case 'brothel':
      tavernRoll.sin += 20
      tavernRoll.roughness += 4
      tavernRoll.cleanliness -= 5
      break
    case 'gambling den':
      tavernRoll.sin += 20
      tavernRoll.roughness += 4
      tavernRoll.cleanliness -= 5
      break
    case 'quiet and low-key bar':
      tavernRoll.sin -= 15
      tavernRoll.activity -= 5
      tavernRoll.roughness -= 10
      tavernRoll.cleanliness += 3
      break
    case 'raucous dive':
      tavernRoll.sin += 5
      tavernRoll.activity += 15
      tavernRoll.roughness += 5
      tavernRoll.cleanliness -= 5
      break
    case "thieves' guild hangout":
      tavernRoll.sin += 15
      tavernRoll.roughness += 5
      break
    case 'high-end dining club':
      tavernRoll.sin -= 10
      tavernRoll.wealth += 5
      tavernRoll.roughness -= 10
      tavernRoll.cleanliness += 10
      break
    case 'members-only club':
      tavernRoll.sin -= 10
      tavernRoll.wealth += 5
      tavernRoll.roughness -= 10
      tavernRoll.cleanliness += 10
      break

    case 'gathering place for a secret society':
      tavernRoll.sin += 5
      tavernRoll.activity -= 5
      break
  }
  /* ------------------------- DRAW -------------------------- */
  switch (tavern.draw) {
    case 'attractive waitstaff':
      tavernRoll.roughness += 3
      tavernRoll.sin += 1
      break
    case 'crude jokes the bartender makes':
      tavernRoll.roughness += 3
      tavernRoll.sin += 1
      break
    case "proximity to the thieves' guild headquarters":
      tavernRoll.roughness += 1
      tavernRoll.sin += 3
      break
    case 'proximity to the brothel':
      tavernRoll.roughness += 1
      tavernRoll.sin += 3
      break
    case 'witty banter with the waitstaff':
      tavernRoll.roughness -= 1
      tavernRoll.sin -= 3
      tavernRoll.cleanliness += 1
      break
    case 'incredible view':
      tavernRoll.roughness -= 1
      tavernRoll.sin -= 3
      tavernRoll.cleanliness += 1
      break
    case 'nice view':
      tavernRoll.roughness -= 1
      tavernRoll.sin -= 3
      tavernRoll.cleanliness += 1
      break
    case 'proximity to the church':
      tavernRoll.roughness -= 1
      tavernRoll.sin -= 3
      tavernRoll.cleanliness += 1
      break
    case 'warmth inside':
      tavernRoll.roughness -= 2
      tavernRoll.sin -= 1
      tavernRoll.cleanliness += 1
      break
    case 'huge fireplace':
      tavernRoll.roughness -= 2
      tavernRoll.sin -= 1
      tavernRoll.cleanliness += 1
      break
    case 'lack of bedbugs':
      tavernRoll.roughness -= 4
      tavernRoll.sin -= 1
      tavernRoll.cleanliness += 15
      break
    case 'clean beds':
      tavernRoll.roughness -= 4
      tavernRoll.sin -= 1
      tavernRoll.cleanliness += 15
      break
  }

  /* ---------------------- TAVERN STRUCTURE MATERIAL ----------------------- */

  switch (tavern.material.noun) {
    case 'hewn rock':
      tavernRoll.roughness += 3
      break
    case 'chiseled stone':
      tavernRoll.roughness -= 1
      break
    case 'marble':
      tavernRoll.cleanliness += 5
      tavernRoll.wealth += 6
      break
  }

  /* ======================= RENDERS ======================= */
  /* ------------------------- WEALTH -------------------------- */

  if (tavernRoll.wealth > 95) {
    tavern.priceModifier += 4
    tavernRoll.size += 3
    tavernRoll.cleanliness += 15
    tavernRoll.roughness -= 10
  } else if (tavernRoll.wealth > 80) {
    tavern.priceModifier += 3
    tavernRoll.cleanliness += 10
  } else if (tavernRoll.wealth > 70) {
    tavern.priceModifier += 2
    tavernRoll.cleanliness += 6
  } else if (tavernRoll.wealth > 60) {
    tavern.priceModifier += 1
    tavernRoll.activity += 5
    tavernRoll.cleanliness += 4
  } else if (tavernRoll.wealth > 50) {
    tavernRoll.activity += 5
    tavernRoll.reputation -= 5
    tavernRoll.cleanliness += 2
  } else if (tavernRoll.wealth > 30) {
    tavern.priceModifier -= 1
    tavernRoll.reputation -= 7
    tavernRoll.cleanliness -= 15
  } else if (tavernRoll.wealth <= 30) {
    tavern.priceModifier -= 2
    tavernRoll.reputation -= 10
    tavernRoll.cleanliness -= 25
  }

  /* ------------------------- SIZE -------------------------- */

  if (tavernRoll.size > 80) {
    tavernRoll.activity += 5
    tavernRoll.roughness += 3
    tavernRoll.cleanliness -= 2
  } else if (tavernRoll.size > 60) {
    tavernRoll.activity += 4
    tavernRoll.roughness += 1
  } else if (tavernRoll.size > 40) {
    tavernRoll.activity += 3
  } else if (tavernRoll.size > 20) {
    tavernRoll.activity -= 2
    tavernRoll.sin -= 5
  } else if (tavernRoll.size <= 20) {
    tavernRoll.sin -= 5
    tavernRoll.activity -= 5
    tavernRoll.roughness -= 3
  }

  /* ------------------------- ROUGHNESS -------------------------- */

  if (tavernRoll.roughness > 80) {
    tavernRoll.activity += 3
    tavernRoll.sin += 5
    tavernRoll.cleanliness -= 4
  } else if (tavernRoll.roughness > 60) {
    tavernRoll.activity += 1
    tavernRoll.sin += 3
    tavernRoll.cleanliness -= 2
  } else if (tavernRoll.roughness > 50) {
    tavernRoll.activity += 1
    tavernRoll.sin -= 1
  } else if (tavernRoll.roughness > 40) {
    tavernRoll.activity += 2
    tavernRoll.sin -= 3
  } else if (tavernRoll.roughness > 30) {
    tavernRoll.activity -= 5
    tavernRoll.sin -= 1
    tavernRoll.wealth += 1
  } else if (tavernRoll.roughness > 20) {
    tavernRoll.activity -= 10
    tavernRoll.sin -= 3
    tavernRoll.wealth -= 1
  } else if (tavernRoll.roughness <= 20) {
    tavernRoll.activity -= 15
    tavernRoll.sin -= 5
    tavernRoll.wealth -= 3
  }

  if (tavernRoll.cleanliness > 80) {
    tavernRoll.wealth += 3
    tavernRoll.roughness -= 3
  } else if (tavernRoll.cleanliness > 70) {
    tavernRoll.wealth += 2
    tavernRoll.roughness -= 3
  } else if (tavernRoll.cleanliness > 60) {
    tavernRoll.wealth += 1
    tavernRoll.roughness -= 2
  } else if (tavernRoll.cleanliness > 50) {
    tavernRoll.roughness -= 2
  } else if (tavernRoll.cleanliness > 40) {
    tavernRoll.roughness -= 1
  } else if (tavernRoll.cleanliness > 30) {
    tavernRoll.activity -= 1
    tavernRoll.sin += 1
    tavernRoll.wealth -= 2
  } else if (tavernRoll.cleanliness > 20) {
    tavernRoll.activity -= 2
    tavernRoll.sin += 3
    tavernRoll.wealth -= 4
  } else if (tavernRoll.cleanliness <= 20) {
    tavernRoll.activity -= 3
    tavernRoll.sin += 5
    tavernRoll.wealth -= 8
  }
}
