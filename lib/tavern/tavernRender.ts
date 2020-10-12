import { Tavern } from './_common'

export function tavernRender (tavern: Tavern) {
  if (tavern.roll.wealth > 95) {
    tavern.wealth = 'kingly'
    tavern.lodging = 800
  } else if (tavern.roll.wealth > 80) {
    tavern.wealth = 'aristocratic'
    tavern.lodging = 400
  } else if (tavern.roll.wealth > 70) {
    tavern.wealth = 'wealthy'
    tavern.lodging = 200
  } else if (tavern.roll.wealth > 60) {
    tavern.wealth = 'comfortable'
    tavern.lodging = 50
  } else if (tavern.roll.wealth > 50) {
    tavern.wealth = 'modest'
    tavern.lodging = 30
  } else if (tavern.roll.wealth > 25) {
    tavern.wealth = 'poor'
    tavern.lodging = 10
  } else {
    tavern.wealth = 'squalid'
    tavern.lodging = 7
  }

  /* ------------------------- SIZE -------------------------- */

  if (tavern.roll.size > 80) {
    tavern.size = 'huge'
  } else if (tavern.roll.size > 70) {
    tavern.size = 'quite large'
  } else if (tavern.roll.size > 60) {
    tavern.size = 'large'
  } else if (tavern.roll.size > 50) {
    tavern.size = 'spacious'
  } else if (tavern.roll.size > 40) {
    tavern.size = 'medium'
  } else if (tavern.roll.size > 30) {
    tavern.size = 'slightly cramped'
  } else if (tavern.roll.size > 20) {
    tavern.size = 'small'
  } else {
    tavern.size = 'tiny'
  }

  /* ------------------------- ROUGHNESS -------------------------- */

  if (tavern.roll.roughness > 80) {
    tavern.roughness = 'bloodthirsty'
  } else if (tavern.roll.roughness > 60) {
    tavern.roughness = 'rough'
  } else if (tavern.roll.roughness > 50) {
    tavern.roughness = 'alright'
  } else if (tavern.roll.roughness > 40) {
    tavern.roughness = 'placid'
  } else if (tavern.roll.roughness > 30) {
    tavern.roughness = 'calm'
  } else if (tavern.roll.roughness > 20) {
    tavern.roughness = 'tranquil'
  } else {
    tavern.roughness = 'utterly serene'
  }

  /* ------------------------- CLEANLINESS -------------------------- */

  if (tavern.roll.cleanliness > 80) {
    tavern.cleanliness = 'absolutely spotless'
  } else if (tavern.roll.cleanliness > 70) {
    tavern.cleanliness = 'spotless'
  } else if (tavern.roll.cleanliness > 60) {
    tavern.cleanliness = 'hygienic'
  } else if (tavern.roll.cleanliness > 50) {
    tavern.cleanliness = 'decently hygienic'
  } else if (tavern.roll.cleanliness > 40) {
    tavern.cleanliness = 'slightly grubby'
  } else if (tavern.roll.cleanliness > 30) {
    tavern.cleanliness = 'quite dirty'
  } else if (tavern.roll.cleanliness > 20) {
    tavern.cleanliness = 'rather filthy'
  } else {
    tavern.cleanliness = 'absolutely putrid'
  }

  /* ------------------------- SIN -------------------------- */

  if (tavern.roll.sin > 80) {
    tavern.sin = 'corrupt'
  } else if (tavern.roll.sin > 70) {
    tavern.sin = 'venal'
  } else if (tavern.roll.sin > 60) {
    tavern.sin = 'sleazy'
  } else if (tavern.roll.sin > 50) {
    tavern.sin = 'seedy'
  } else if (tavern.roll.sin > 40 && tavern.roll.roughness > 60) {
    tavern.sin = 'surprisingly trustworthy'
  } else if (tavern.roll.sin > 40) {
    tavern.sin = 'trustworthy'
  } else if (tavern.roll.sin > 30 && tavern.roll.roughness > 60) {
    tavern.sin = 'surprisingly reliable'
  } else if (tavern.roll.sin > 30) {
    tavern.sin = 'reliable'
  } else if (tavern.roll.sin <= 20 && tavern.roll.roughness > 60) {
    tavern.sin = 'surprisingly honest'
  } else {
    tavern.sin = 'honest'
  }

  /* ------------------------- DIVERSITY -------------------------- */

  tavern.diversity = 'placeholder'

  /* ------------------------- REPUTATION -------------------------- */

  if (tavern.roll.reputation > 80) {
    tavern.reputation = 'famous'
  } else if (tavern.roll.reputation > 60) {
    tavern.reputation = 'well known'
  } else if (tavern.roll.reputation > 40) {
    tavern.reputation = 'famous-ish'
  } else if (tavern.roll.reputation > 20) {
    tavern.reputation = 'reviled'
  } else {
    tavern.reputation = 'infamous'
  }

  return tavern
}
