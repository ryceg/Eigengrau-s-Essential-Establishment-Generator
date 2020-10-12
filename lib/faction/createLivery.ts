import { factionData } from './factionData'
import { Faction } from './_common'
import { random } from '../src/random'

interface Livery {
    colours: {
      primary: string
      secondary: string
    }
    insignia: string
}

export function createLivery (faction: Faction) {
  const factionType = factionData[faction.type]

  if (factionType.livery == null) {
    return
  }

  const livery: Livery = {
    colours: {
      primary: random(factionType.livery.colours.primary),
      secondary: random(factionType.livery.colours.secondary)
    },
    insignia: random(factionType.livery.insignia)
  }

  return livery
}

export function readoutLivery (livery: Livery) {
  return `${livery.colours.primary} and ${livery.colours.secondary} livery adorned with an image of ${livery.insignia}`
}
