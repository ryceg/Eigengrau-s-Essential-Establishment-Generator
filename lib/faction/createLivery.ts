import { factionData, FactionType } from './factionData'
import { random } from '../src/random'

export interface Livery {
  colours: {
    primary: string
    secondary: string
  }
  insignia: string
}

export function createLivery (type: FactionType) {
  const typeData = factionData.types[type]
  if (!typeData.livery) return

  const livery: Livery = {
    colours: {
      primary: random(typeData.livery.colours.primary),
      secondary: random(typeData.livery.colours.secondary)
    },
    insignia: random(typeData.livery.insignia)
  }

  return livery
}

export function readoutLivery (livery: Livery) {
  return `${livery.colours.primary} and ${livery.colours.secondary} livery adorned with an image of ${livery.insignia}`
}
